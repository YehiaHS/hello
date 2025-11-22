/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        alabaster: '#f0f0f0',
        brutalYellow: '#ffea00',
        brutalCyan: '#00ffff',
        brutalMagenta: '#ff00ff',
        brutalLime: '#ccff00',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        brutal: '10px 10px 0 0 #000000',
        brutalSm: '5px 5px 0 0 #000000',
        brutalLg: '15px 15px 0 0 #000000',
        brutalReverse: '-8px 8px 0 0 #000000',
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

