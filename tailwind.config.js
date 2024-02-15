/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      white: '#ffffff',
      black: '#000000',
      black600: '#444444',
      gray: '#dddddd',
      gray200: '#eeeeee',
      purple200: '#c9b5e0',
      purple: '#8253E5',
      pink:  '#d61385',
      orange: '#ff6600',
      yellow: '#ffcc00'
    },
    backgroundImage: {
      'banner': "url('/src/assets/images/predio-scientia.png')",
    }
  },
  plugins: [],
}