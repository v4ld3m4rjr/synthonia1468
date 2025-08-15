// [AI Generated] Data: 19/03/2024
// Descrição: Configuração do Tailwind CSS com cores personalizadas
// Gerado por: Cursor AI
// Versão: Tailwind CSS 3.4.10

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0E12',
        text: '#E6E6E6',
        'text-dim': '#A0A0A0',
        panel: '#1A1B1F',
        chakra: {
          heart: '#FF6B6B',
          solar: '#FFD93D',
          throat: '#6BCF7F',
          thirdEye: '#4ECDC4',
          crown: '#A8E6CF',
          root: '#FF8B94',
        },
      },
    },
  },
  plugins: [],
}

export default config
