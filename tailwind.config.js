/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito' : ['Nunito', 'sans-serif'],
        'libre'  : ['Libre Baskerville', 'serif'],
      }
    },
  },
  plugins: [],
}
