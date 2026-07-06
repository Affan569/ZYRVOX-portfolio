/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zyrvox-dark': '#020617',
        'zyrvox-dark-2': '#020824',
        'zyrvox-card': '#0b1120',
        'zyrvox-electric': '#00d4ff',
        'zyrvox-gold': '#f59e0b',
        'zyrvox-gold-2': '#fbbf24',
        'zyrvox-text': '#e5e7eb',
        'zyrvox-text-2': '#9ca3af',
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'zyrvox-glow': '0 0 40px rgba(0, 212, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
