/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 1s ease-out',
      },
      colors: {
        'custom-purple': '#2f27ce',
        'custom-green': '#8a2be2',
        'custom-green-hover': '#443dff',
        'custom-black': '#040316'
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

