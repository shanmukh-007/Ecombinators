import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundStart: '#0B0E11',
        backgroundEnd: '#12151A',
        accent: '#00C2FF',
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px rgba(0, 0, 0, 0.35)',
      },
      borderRadius: {
        xl: '14px',
      },
    },
  },
  plugins: [],
} satisfies Config

