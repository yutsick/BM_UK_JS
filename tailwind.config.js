export default{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],
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
          blue: '#4A89E1',
          linkReview: '#47A1B2',
          linkVisit: '#1C81A5',
          orange: '#E3B321',
        },
        background: {
          primary: '#FFFFFF', 
          grey: '#4D4D4D',
          green: '#00B370',
          yellow: '#FDC300',
          red: '#BE0004',        },
      },
      backgroundImage: {
        'top-header': 'linear-gradient(90deg, #32302E 0%, #3F3E3D 27%, #5B5958 61.5%, #8F8B89 100%)',
      },
      boxShadow: {
        banner: '0px 0px 4px 0px #00000040'

      },
      gridTemplateRows: {
        13: 'repeat(13, minmax(0, 1fr))', 
      },
    },
  },
  plugins: [],
};
