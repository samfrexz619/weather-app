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
        card_bg: '#373636',
        dark_bg: '#5d5b5b',
        bgg: '#636060',
        card: '#D9D9D9',
        text: '#292929',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        box: '2px 2px 2px 0px rgba(0, 0, 0, 0.50)',
      },
      borderRadius: {
        30: '30px'
      },
      fontSize: {
        60: '60px',
      },
      spacing: {
        260: '260px',
        15: '60px',
        95: '95%',
      },
      backgroundImage: {
        orange: 'linear-gradient(171deg, #F88508 -12.41%, rgba(246, 250, 217, 0.00) 163.32%)',
        grey: 'linear-gradient(174deg, #443D64 -15.92%, rgba(101, 130, 198, 0.00) 192.45%);',
        dak: 'linear-gradient(174deg, #373636, #373636)',
        txt_dak: 'linear-gradient(84deg, #FFF -16.56%, rgba(255, 255, 255, 0.00) 118.43%);',
        txt_lit: '-webkit-linear-gradient(#292929 -2.93%, rgba(255, 255, 255, 0.00))',
        img: "url('./src/assets/images/mock_up.png')",
        dark_img: "url('./src/assets/images/dark.png')"
      }
    },
  },
  plugins: [],
}

