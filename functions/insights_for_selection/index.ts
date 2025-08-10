// Edge Function: insights_for_selection
// Entrada: { owner_id, from, to, variables: string[] } -> correlações e sumários.
export default async (req: Request) => {
  const body = await req.json()
  // TODO: calcular Pearson/Spearman no banco e devolver métricas.
  return new Response(JSON.stringify({ ok: true, received: body }), { headers: { 'content-type': 'application/json' } })
}
