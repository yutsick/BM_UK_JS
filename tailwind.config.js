export default{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'], 
        rock: ['Rock', 'sans-serif'], 
      },
      fontSize: {
        small:'14px',
        base: '16px', 
        lg: '18px',
      },
      fontWeight: {
        normal: '400', 
        bold: '700',
      },
      colors: {
        color: {
          base: '#252525', 
          grey: '#686867', 
          greyLight: '#EDEDED',
          red: '#BE0004',
          blue: '#22AED9',
          linkReview: '#47A1B2',
          linkVisit: '#1C81A5'
        },
        background: {
          primary: '#FFFFFF', 
          grey: '#EDEDED',
          green: '#00B370',
          yellow: '#FDC300',
          red: '#BE0004'
        },
      },
      gridTemplateRows: {
        13: 'repeat(13, minmax(0, 1fr))', 
      },
    },
  },
  plugins: [],
};
