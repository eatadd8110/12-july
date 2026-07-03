import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 40px 120px rgba(15, 23, 42, 0.35)',
      },
      colors: {
        bg: '#02050f',
        surface: '#08101f',
      },
    },
  },
  plugins: [],
}

export default config
