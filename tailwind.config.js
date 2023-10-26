/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        custom: {
          bodycolor: '#f5f5f5',
          textcolor:'#21229e',
          textcolorhover:'#b152a3',
          buttoncolor:'#8000a3',
          footercolor:'#21225f',
          buttonbgcolor:'#e6f6fc',
          starcolor:'#ff9900',
          zoommeetcardcolor:'#d7bbdfed',
          zoommeetcolor:'#21225f',
          filtercolor:'#0009',
        },
      },
      fontFamily: {
        font: '/fonts/bpg_extrasquare_mtavruli_2009.ttf',
      },
    },

  },
  variants: {},
  corePlugins: {},
  customUtilities: {
    picksel:{
      w95: 'width: 95%',
    }
    // Define a custom width class with a width of 95%
    
  },
  plugins: [],
}

