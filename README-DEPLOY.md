# Deploy — Passo a passo (Netlify + Supabase)

## 1) Supabase
1. Crie o projeto → **SQL Editor** → execute `schema.sql` (tabelas, views, policies).
2. **Auth**: Email/Senha habilitado. Crie a tabela `profiles` com trigger para `auth.users` (vide `schema.sql`).
3. **RLS**: já habilitado nas tabelas do schema. Teste com dois usuários.
4. **Storage** (opcional): bucket `uploads`.
5. **Edge Functions**: use `supabase functions deploy <nome>` na pasta `functions/`.

## 2) GitHub
Suba este pacote para seu repositório. Não comite `.env`.

## 3) Netlify
- Build: `npm run build`  |  Publish: `.next`
- Env vars (na UI do Netlify):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `OPENAI_API_KEY`
  - `READINESS_WINDOW_ATL` (ex: 7)
  - `READINESS_WINDOW_CTL` (ex: 42)

## 4) Teste local (opcional)
```
npm i
npm run dev
```
Abra `http://localhost:3000`.

## 5) Seeds
Importe `data/seed.csv` na tela **Treinos** para popular sessões.
