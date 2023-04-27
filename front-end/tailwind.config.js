/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'mainBlack': '#09090A',
      'middleRed': '#F75A68',
      'mainPurple': '#8E05C2',
      'lowGray': '#8D8D99',
      'mediumGray': '#202024',
      'darkGray': '#121214',
    },
    extend: {},
  },
  plugins: [],
}

