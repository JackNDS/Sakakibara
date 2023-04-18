/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1100px',
      xl: '1440px'
    },
    extend: {
      colors:{
        lightGrey: '#F4F4F4',
        darkGrey: '#3C3D40',
      }
    },
  },
  plugins: [],
}
