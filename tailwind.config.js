/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-yellow': '#FFF8DC',
        'pastel-yellow-light': '#FFFACD',
        'pastel-yellow-dark': '#F0E68C',
        'pastel-mint': '#F0FFF0',
        'pastel-mint-light': '#E6FFE6',
        'pastel-mint-dark': '#B8E6B8',
        'japanese-yellow': '#FFD700',
        'japanese-yellow-light': '#FFE55C',
        'japanese-yellow-dark': '#E6C200',
        'mint-green': '#98FB98',
        'mint-green-light': '#B8FFB8',
        'mint-green-dark': '#7AC87A',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"],
  },
}
