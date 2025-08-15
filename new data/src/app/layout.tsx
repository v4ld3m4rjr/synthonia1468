import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SynthonIA Chakra',
  description: 'Monitoramento de Recovery, Prontidão e Carga com IA',
}

export default function RootLayout({ children }:{ children: React.ReactNode }){
  return (
    <html lang="pt-BR">
      <body className="bg-bg text-text">{children}</body>
    </html>
  )
}
