// [AI Generated] Data: 19/03/2024
// Descrição: Correção da página principal com estilos adequados
// Gerado por: Cursor AI
// Versão: Next.js 14.2.5, TypeScript 5.6.2

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text p-6">
      <div className="flex items-center justify-center min-h-screen">
        <Link 
          href="/dashboard" 
          className="card hover:opacity-90 transition text-center"
        >
          <div className="text-2xl font-semibold mb-2">SynthonIA Chakra</div>
          <div className="text-text-dim">Abrir Dashboard</div>
        </Link>
      </div>
    </main>
  )
}
