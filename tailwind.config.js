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
      'logoBg': '#F50C41',
      'navBg' : '#F00606',
      'myBlue': '#060BF0',
      'lightishBlue': '#000099',
      'whiteText': '#ffffff',
      'btnBg': '#F00606',
      'blackBg': '#000000',
    },
    fontFamily: {
      'montserrat': 'montserrat',
    },
    extend: {
      backgroundImage: {
        'heroBg': "url('/public/img/smoke-HD.jpg')",
      }
    },
  },
  plugins: [],
}
