export default async (req: Request) => {
  const evt = await req.json()
  return new Response(JSON.stringify({ ok: true, evt }), { headers: { 'content-type': 'application/json' } })
}
