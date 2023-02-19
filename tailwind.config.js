/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    colors: {
      'logoBg': '#ccc6c6',
      'navBg' : '#000033',
      'lightishBlue': '#000099',
      'borderBg': '#d9d9de',
      'btnBg': '#e60000',
    },
    fontFamily: {
      'montserrat': 'montserrat',
    },
    extend: {},
  },
  plugins: [],
}
