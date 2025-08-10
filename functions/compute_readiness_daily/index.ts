// deno-lint-ignore-file no-explicit-any
// Edge Function: compute_readiness_daily
// Recebe owner_id/date e grava IIERP, ATL/CTL/TSB, monotonia/strain em `readiness`.
export default async (req: Request) => {
  const { owner_id, date } = await req.json()
  // TODO: buscar wellness_daily + cargas (últimos 42d), computar EMA e normalizações.
  return new Response(JSON.stringify({ ok: true, owner_id, date }), { headers: { 'content-type': 'application/json' } })
}
