// [AI Generated] Data: 19/03/2024
// Descrição: Simplificação do código após desabilitar typedRoutes
// Gerado por: Cursor AI
// Versão: Next.js 14.2.5, TypeScript 5.6.2

import Link from 'next/link'

const items = [
  { href: '/recovery', label: 'Recovery & Prontidão', color: 'chakra.heart' },
  { href: '/treinos', label: 'Treinos', color: 'chakra.solar' },
  { href: '/rehab', label: 'Rehabilitation', color: 'chakra.throat' },
  { href: '/ai', label: 'Análise com IA', color: 'chakra.thirdEye' },
  { href: '/analytics', label: 'Analytics', color: 'chakra.crown' },
  { href: '/settings', label: 'Configurações', color: 'chakra.root' },
]

export default function DashboardHub() {
  return (
    <main className="min-h-screen bg-bg text-text p-6">
      <h1 className="text-3xl font-semibold mb-6">SynthonIA Chakra</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="card hover:opacity-90 transition">
            <div className="text-lg">{it.label}</div>
            <div className="kpi">Acesse o módulo</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
