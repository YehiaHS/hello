/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0e0e10',
        alabaster: '#f3f1ed',
        brutalYellow: '#ffd400',
        brutalCyan: '#19e0ff',
        brutalMagenta: '#ff007f',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        brutal: '8px 8px 0 0 #0e0e10',
        brutalSm: '4px 4px 0 0 #0e0e10',
      },
      backgroundImage: {
        grid: 'linear-gradient(90deg, rgba(14,14,16,0.08) 1px, transparent 0), linear-gradient(180deg, rgba(14,14,16,0.08) 1px, transparent 0)',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.45' },
        },
      },
      animation: {
        ticker: 'ticker 18s linear infinite',
        flicker: 'flicker 7s linear infinite',
      },
    },
  },
  plugins: [],
}

