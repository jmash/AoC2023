/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'aoc_green': '#009900',
        'aoc_input': '#090d15',
        'aoc_loading': '#4489ac',
        'aoc_success': '#004400',
        'aoc_failure': '#FF0000',
      },
      opacity: {
        '2': '.02',
      },
      animation: {
        'animate-spin-wind-down': '',
      }
    }
  },
  plugins: [],
}
