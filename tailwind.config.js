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
    themes: [
      {
        pastel: {
          primary: "#FFF8DC",
          "primary-content": "#111111",
          secondary: "#E6FFE6",
          "secondary-content": "#111111",
          accent: "#B8E6B8",
          "accent-content": "#111111",
          neutral: "#111111",
          "neutral-content": "#FFFFFF",
          "base-100": "#FFFDF3",
          "base-200": "#F5FFF8",
          "base-300": "#EBF6EE",
          "base-content": "#111111",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
}
