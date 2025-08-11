-- (abreviado) Esquema principal + RLS; adapte conforme necessário
create extension if not exists pgcrypto;
create table if not exists profiles (
  id uuid primary key,
  role text check (role in ('admin','atleta','treinador','fisioterapeuta')) not null,
  full_name text,
  created_at timestamptz default now()
);
create table if not exists sessions (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete cascade,
  type text check (type in ('treino','reab')) not null,
  modality text,
  date date not null,
  duration_min numeric,
  sRPE numeric,
  session_load numeric,
  notes text,
  created_at timestamptz default now()
);
alter table profiles enable row level security;
alter table sessions enable row level security;
create policy "self read" on profiles for select using (auth.uid() = id);
create policy "self update" on profiles for update using (auth.uid() = id);
create policy "sessions read owner" on sessions for select using (owner_id = auth.uid());
create policy "sessions insert owner" on sessions for insert with check (owner_id = auth.uid());
create index if not exists idx_sessions_owner_date on sessions(owner_id, date);
