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
        aprila: ['Aprila', 'sans-serif'], 
      },
      boxShadow: {
        'custom-heavy': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
      },
    },
  },
  plugins: [],
}

