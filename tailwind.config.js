/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: '#FF1C44',
        purple: '#CCD1EE',
        'purple-2': '#5E6488',
        'purple-3': '#4F4FFF',
        'purple-4': '#EDEFFC',
        'purple-5': '#C333FF',
        'black-main': '#03050F'
      },
    },
  },
  plugins: [],
}

