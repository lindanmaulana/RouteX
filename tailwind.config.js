/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html","./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'primary': '#034833',
        'secondary': '#83CD20'
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

