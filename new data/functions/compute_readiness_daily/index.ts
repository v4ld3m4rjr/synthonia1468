export default async (req: Request) => {
  const { owner_id, date } = await req.json()
  return new Response(JSON.stringify({ ok: true, owner_id, date }), { headers: { 'content-type': 'application/json' } })
}
