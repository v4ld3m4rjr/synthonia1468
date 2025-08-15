import Link from 'next/link'

const items = [
  { href: '/dashboard/recovery', label: 'Recovery & Prontidão' },
  { href: '/dashboard/treinos', label: 'Treinos' },
  { href: '/dashboard/rehab', label: 'Rehabilitation' },
  { href: '/dashboard/ai', label: 'Análise com IA' },
  { href: '/dashboard/analytics', label: 'Analytics' },
  { href: '/dashboard/settings', label: 'Configurações' },
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
