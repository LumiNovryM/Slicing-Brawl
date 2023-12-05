/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    backgroundColor: {
      'white': '#ffffff',
      'soft-white': '#f0f3ff',
      'soft-red': '#fff0e5',
      'yellow': '#facb3b',
      'dark-purple': '#090e23',
      'light-purple': '#3a10e5',
      'light-gray': '#F0F0F0'
    },
    textColor: {
      'light-purple': '#3a10e5',
      'white': '#ffffff',
      'black': '#121313',
      'gray': '#797c87'
    },
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

