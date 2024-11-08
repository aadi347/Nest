/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#6B46C1',
        'custom-green': '#38A169',
        'custom-green-hover': '#187A45'
      },
      fontFamily: {
        aprila: ['Aprila', 'sans-serif'], // Add Aprila font
      },
    },
  },
  plugins: [],
}

