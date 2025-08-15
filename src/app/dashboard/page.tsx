import Link from 'next/link'
export default function Hub(){
  return <main style={{padding:24}}>
    <h1>SynthonIA Chakra</h1>
    <ul>
      <li><Link href="/dashboard/recovery">Recovery & Prontidão</Link></li>
      <li><Link href="/dashboard/treinos">Treinos</Link></li>
      <li><Link href="/dashboard/rehab">Rehabilitation</Link></li>
      <li><Link href="/dashboard/ai">Análise com IA</Link></li>
      <li><Link href="/dashboard/analytics">Analytics</Link></li>
      <li><Link href="/dashboard/settings">Configurações</Link></li>
    </ul>
  </main>
}
