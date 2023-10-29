/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_bg: 'linear-gradient(113deg, #FFF 0.28%, rgba(70, 97, 115, 0.00) 178.65%)',
      }
    },
  },
  plugins: [],
}

