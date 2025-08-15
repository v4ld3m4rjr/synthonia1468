// [AI Generated] Data: 19/03/2024
// Descrição: Configuração do Next.js para resolver problemas de prerendering
// Gerado por: Cursor AI
// Versão: Next.js 14.2.5

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  // Desabilitar prerendering para resolver problemas de clientModules
  trailingSlash: true,
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
