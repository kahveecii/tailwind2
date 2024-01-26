/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      //membuat custom spacing
      spacing: {
        13: '5rem',
      }
    },
    fontFamily:{
      'poppins' : ['Poppins']
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

