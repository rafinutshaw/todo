/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-500': '#FEFEFE',
        'white-600': '#f5f5f5',
        'black': '#4e4e4e',
        'black-300': '#989898',
        'gray-200': '#E6E6E6',
        'maroon-200': '#ead7d7',
        'maroon-300': '#CB9898',
        'green-200': '#5BC1AD'
      },
      width: {
        '42': '10.5rem',
        '116': '29rem',
      },
      height: {
        '42': '10.5rem',
      }
    },
  },
  plugins: [],
}

