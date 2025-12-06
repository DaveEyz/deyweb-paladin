/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pixel-dark': '#2d1b2e',
        'pixel-pink': '#ff0055',
        'pixel-blue': '#00e5ff',
        'pixel-yellow': '#fff200',
      },
      fontFamily: {
        'sans': ['Press Start 2P', 'monospace'],
      },
    },
  },
  plugins: [],
}

