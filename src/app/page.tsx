import Link from 'next/link'

export default function Home(){
  return (
    <main className="min-h-screen grid place-items-center bg-bg text-text p-6">
      <div className="card w-full max-w-lg text-center space-y-3">
        <h1 className="text-3xl font-semibold">SynthonIA Chakra</h1>
        <p className="text-text-dim">Clique para abrir o hub de módulos.</p>
        <Link href="/dashboard" className="inline-block px-4 py-2 rounded-xl bg-panel ring-1 ring-zinc-700">
          Abrir Dashboard
        </Link>
      </div>
    </main>
  )
}
