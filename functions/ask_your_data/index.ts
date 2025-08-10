// Edge Function: ask_your_data
// Transforma intenção em template SQL seguro (whitelist) e retorna tabela + resumo.
export default async (req: Request) => {
  const body = await req.json()
  // TODO: mapear intents -> templates pré-aprovados
  return new Response(JSON.stringify({ ok: true, received: body }), { headers: { 'content-type': 'application/json' } })
}
