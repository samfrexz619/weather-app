/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pry: '#e8e9ea',
        // card_bg: '#383838',
        dark_bg: '#5d5b5b',
        bgg: '#636060',
        card: '#D9D9D9',
        text: '#292929',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        box: '10px 10px 4px 0px rgba(0, 0, 0, 0.50)',
      },
      borderRadius: {
        30: '30px'
      },
      fontSize: {
        60: '60px',
      }
    },
  },
  plugins: [],
}

