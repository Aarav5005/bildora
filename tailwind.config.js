/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f9f9fa',
        brand: {
          50: '#f0f5ff',
          100: '#e5edff',
          200: '#cce0ff',
          300: '#9ec4ff',
          400: '#6ca1ff',
          500: '#3377ff',
          600: '#0052ff', // Signature Deep Cobalt
          700: '#0043d6',
          800: '#0036ad',
          900: '#032a85',
          950: '#011852',
        },
        obsidian: {
          DEFAULT: '#09090b',
          surface: '#111115',
          card: '#16171d',
          border: '#242630',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Newsreader"', '"Instrument Serif"', 'Georgia', 'serif'],
        editorial: ['"Instrument Serif"', 'Newsreader', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'bento': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'bento-hover': '0 12px 30px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 82, 255, 0.2)',
        'glow': '0 0 25px -5px rgba(0, 82, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
