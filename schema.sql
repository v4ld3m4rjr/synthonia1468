-- SynthonIA Chakra schema (v1)

create extension if not exists "uuid-ossp";
create extension if not exists pgcrypto;

-- PROFILES
create table if not exists profiles (
  id uuid primary key,
  role text check (role in ('admin','atleta','treinador','fisioterapeuta')) not null,
  full_name text,
  birthdate date,
  gender text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RELATIONSHIPS
create table if not exists relationships (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references profiles(id) on delete cascade,
  trainer_id uuid references profiles(id) on delete cascade,
  patient_id uuid references profiles(id) on delete cascade,
  physio_id uuid references profiles(id) on delete cascade,
  active boolean default true,
  created_at timestamptz default now()
);

-- SESSIONS
create table if not exists sessions (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  type text check (type in ('treino','reab')) not null,
  modality text,
  date date not null,
  start_time time,
  duration_min numeric,
  sRPE numeric,
  session_load numeric,
  notes text,
  created_at timestamptz default now()
);

-- STRENGTH SETS
create table if not exists strength_sets (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references sessions(id) on delete cascade,
  exercise text,
  sets int,
  reps int,
  load_kg numeric,
  rest_s int
);

-- ENDURANCE METRICS
create table if not exists endurance_metrics (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references sessions(id) on delete cascade,
  avg_hr int,
  hr_zones jsonb,
  "if" numeric,
  np numeric,
  tss numeric,
  trimp numeric
);

-- WELLNESS DAILY
create table if not exists wellness_daily (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  date date not null,
  sleep_quality int,
  fatigue int,
  soreness int,
  stress int,
  mood int,
  prs int,
  tqr int,
  created_at timestamptz default now(),
  unique(owner_id, date)
);

-- PAIN MAP
create table if not exists pain_map (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  date date,
  body_part text,
  pain_0_10 int
);

-- PSYCH SCALES
create table if not exists psych_scales (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  date date not null,
  scale text check (scale in ('BRUMS','PSS10')) not null,
  payload jsonb,
  scores jsonb,
  consent boolean default true
);

-- READINESS
create table if not exists readiness (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  date date not null,
  iierp numeric,
  readiness_comp numeric,
  recovery_comp numeric,
  tsb numeric,
  atl numeric,
  ctl numeric,
  monotony numeric,
  strain numeric,
  created_at timestamptz default now(),
  unique(owner_id, date)
);

-- WEEKLY LOADS
create table if not exists weekly_loads (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  year int,
  week int,
  total_load numeric,
  mean_daily_load numeric,
  sd_daily_load numeric,
  monotony numeric,
  strain numeric,
  unique(owner_id, year, week)
);

-- COMMENTS
create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references profiles(id) on delete cascade,
  entity_type text not null,
  entity_id uuid,
  message text not null,
  created_at timestamptz default now()
);

-- NUMEROLOGY
create table if not exists numerology_profiles (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  birthdate date,
  full_name text,
  numbers jsonb,
  cycles jsonb
);

-- BREATHWORK
create table if not exists breathwork_sessions (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  date date,
  type text,
  duration_min int,
  perceived_effect text
);

-- TESTS CATALOG
create table if not exists tests_catalog (
  id uuid primary key default gen_random_uuid(),
  code text unique,
  name text,
  description text,
  refs text
);

-- TEST RUNS
create table if not exists test_runs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  test_code text references tests_catalog(code) on delete cascade,
  date date,
  result jsonb,
  derived jsonb
);

-- AUDIT EVENTS (admin)
create table if not exists audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references profiles(id) on delete set null,
  event text,
  metadata jsonb,
  created_at timestamptz default now()
);

-- VIEW: TONNAGE
create or replace view v_session_tonnage as
select s.id as session_id,
       coalesce(sum(ss.sets*ss.reps*ss.load_kg),0) as tonnage_kg,
       coalesce(sum(ss.rest_s),0)/60.0 as rest_min
from sessions s
left join strength_sets ss on ss.session_id = s.id
where s.type = 'treino'
group by s.id;

-- RLS
alter table profiles enable row level security;
alter table relationships enable row level security;
alter table sessions enable row level security;
alter table strength_sets enable row level security;
alter table endurance_metrics enable row level security;
alter table wellness_daily enable row level security;
alter table pain_map enable row level security;
alter table psych_scales enable row level security;
alter table readiness enable row level security;
alter table weekly_loads enable row level security;
alter table comments enable row level security;
alter table numerology_profiles enable row level security;
alter table breathwork_sessions enable row level security;
alter table tests_catalog enable row level security;
alter table test_runs enable row level security;
alter table audit_events enable row level security;

-- Policies
create policy "self read profile" on profiles for select using (auth.uid() = id or exists(select 1 from profiles me where me.id=auth.uid() and me.role='admin'));
create policy "self update profile" on profiles for update using (auth.uid() = id);

-- helper function for relationship checks
create or replace view v_user_links as
select r.*, r.athlete_id as athlete, r.trainer_id as trainer, r.patient_id as patient, r.physio_id as physio
from relationships r where active = true;

-- sessions policies
create policy "sessions read owner/links/admin" on sessions for select using (
  owner_id = auth.uid()
  or exists (select 1 from profiles me where me.id=auth.uid() and me.role='admin')
  or exists (select 1 from v_user_links l where (l.trainer = auth.uid() and l.athlete = sessions.owner_id) or (l.physio = auth.uid() and l.patient = sessions.owner_id))
);
create policy "sessions insert owner" on sessions for insert with check (owner_id = auth.uid());
create policy "sessions update owner" on sessions for update using (owner_id = auth.uid());

-- replicate similar read policies for other user-owned tables
-- (for brevity we reuse the same predicate with owner_id)
do $$
declare t text;
begin
  foreach t in array array['strength_sets','endurance_metrics','wellness_daily','pain_map','psych_scales','readiness','weekly_loads','comments','numerology_profiles','breathwork_sessions','test_runs']
  loop
    execute format('create policy if not exists "%s read owner/links/admin" on %I for select using (
      (case when %I = ''comments'' then author_id else owner_id end) = auth.uid()
      or exists (select 1 from profiles me where me.id=auth.uid() and me.role=''admin'')
    );', t, t, t);
  end loop;
end $$;

-- indexes
create index if not exists idx_sessions_owner_date on sessions(owner_id, date);
create index if not exists idx_wellness_owner_date on wellness_daily(owner_id, date);
create index if not exists idx_readiness_owner_date on readiness(owner_id, date);
create index if not exists idx_weekly_owner on weekly_loads(owner_id, year, week);
