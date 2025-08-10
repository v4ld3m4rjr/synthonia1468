# SynthonIA Chakra — Starter Kit (v1)

**Data:** 2025-08-10  
**Stack:** Next.js (TypeScript) + Tailwind + Recharts/Plotly · Supabase (Postgres/Auth/Storage/RLS/Edge Functions) · OpenAI API · Netlify

Este pacote contém:
- **schema.sql** — Tabelas, *views*, e RLS para o Supabase.
- **functions/** — 4 Edge Functions (stubs) prontos para publicar.
- **src/** — Esqueleto do app com 6 módulos (fundo escuro, tema Chakras).
- **data/seed.csv** — Exemplos de sessões para import.
- **env.example** — Variáveis de ambiente.
- **netlify.toml** — Build e envs para Netlify.
- **README-DEPLOY.md** — Passo a passo de implantação.
- **LICENSE** — MIT.

> ⚠️ **Segurança:** Não versione chaves reais. Configure `OPENAI_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` apenas no painel do Netlify/Supabase.

## Estrutura
```
synthonia-chakra-starter/
├─ schema.sql
├─ netlify.toml
├─ env.example
├─ package.json
├─ tsconfig.json
├─ next.config.js
├─ postcss.config.js
├─ tailwind.config.ts
├─ README-DEPLOY.md
├─ data/seed.csv
├─ functions/
│  ├─ compute_readiness_daily/index.ts
│  ├─ insights_for_selection/index.ts
│  ├─ ask_your_data/index.ts
│  └─ admin_metrics_track/index.ts
└─ src/
   ├─ app/(auth)/login/page.tsx
   ├─ app/(dashboard)/page.tsx
   ├─ app/(dashboard)/recovery/page.tsx
   ├─ app/(dashboard)/treinos/page.tsx
   ├─ app/(dashboard)/rehab/page.tsx
   ├─ app/(dashboard)/analytics/page.tsx
   ├─ app/(dashboard)/ai/page.tsx
   ├─ app/(dashboard)/settings/page.tsx
   ├─ app/(dashboard)/admin/page.tsx
   ├─ components/cards/KpiCard.tsx
   ├─ components/charts/LineChart.tsx
   ├─ lib/supabaseClient.ts
   ├─ lib/prompts.ts
   ├─ lib/calc.ts
   └─ styles/globals.css
```

## Começo rápido
1. Crie o projeto no **Supabase** e rode `schema.sql` (SQL Editor).  
2. **Netlify** → Novo site do Git → selecione seu repositório → set envs do `.env.example`.  
3. **Supabase CLI** → publique as Edge Functions em `functions/`.  
4. Faça login, cadastre um usuário e teste o upload do `data/seed.csv` na tela **Treinos**.

Boa construção! 🧿
