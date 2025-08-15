// [AI Generated] Data: 19/03/2024
// Descrição: Página principal extremamente simples para evitar problemas de prerendering
// Gerado por: Cursor AI
// Versão: Next.js 14.2.5, TypeScript 5.6.2

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0D0E12', 
      color: '#E6E6E6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: '#1A1B1F',
        padding: '24px',
        borderRadius: '16px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer'
      }}
      onClick={() => window.location.href = '/(dashboard)'}
      >
        <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>
          SynthonIA Chakra
        </div>
        <div style={{ fontSize: '14px', color: '#A0A0A0' }}>
          Clique para abrir o Dashboard
        </div>
      </div>
    </div>
  )
}
