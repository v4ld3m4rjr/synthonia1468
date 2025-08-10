// Edge Function: admin_metrics_track
// Registra eventos de uso em audit_events (somente leitura por admin).
export default async (req: Request) => {
  const evt = await req.json()
  // TODO: inserir em audit_events com RLS de serviço
  return new Response(JSON.stringify({ ok: true, evt }), { headers: { 'content-type': 'application/json' } })
}
