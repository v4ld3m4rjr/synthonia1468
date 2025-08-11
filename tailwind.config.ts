import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0E12',
        panel: '#12131A',
        text: { DEFAULT: '#E6E6E6', dim: '#BDBDBD' },
        chakra: {
          root: '#D7263D', sacral: '#F46036', solar: '#FFC145', heart: '#19A974',
          throat: '#2E86AB', thirdEye: '#4747FF', crown: '#8A2BE2'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
