module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        edvora: {
          black: '#131313',
          greyFont: '#A5A5A5',
          greyCard: '#232323',
          greyCard2: 'rgba(19,19,19,.9)',
          hr: '#CBCBCB',
          login: 'rgb(115 61 71 / 49%)',
          offwhiteFont: '#FFFFFF',
          vector104: 'rgba(203, 203, 203, 0.5)',
        }
      }
    },
  },
  plugins: [],
}
