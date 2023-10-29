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
        card_bg: '#383838',
        dark_bg: '#5d5b5b',
      },
      backgroundImage: {
        main_bg: 'linear-gradient(90deg, rgba(217,217,217,1) 60%, rgba(41,41,41,0.6) 99%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

