export default async (req: Request) => {
  const body = await req.json()
  return new Response(JSON.stringify({ ok: true, received: body }), { headers: { 'content-type': 'application/json' } })
}
