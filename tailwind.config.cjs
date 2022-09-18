/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',

    },
    container:{
      center: true,
      padding:'1rem'
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
  
       },
       colors: {
        // Configure your color palette here
        'primary': '#FD3D57'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
