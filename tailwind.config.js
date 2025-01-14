/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 3s ease infinite',
        "loop-scroll":"loop-scroll 32s linear infinite",
        'scroll-up': 'scroll-up 40s linear infinite',
        'scroll-down': 'scroll-down 40s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        "loop-scroll": {
          from:{transform:"translatex(0)"},
          to:{transform:"translatex(-100%)"},
        },

        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },


      },
      backgroundSize: {
        '200%': '200%', 
        'dots-size': '10px 5px',
      },
      colors: {
        customBlue: 'rgb(230, 236, 252)',
        customGray: 'rgb(237, 237, 237)',
        customLightBlue: 'rgb(245, 247, 254)',
        customLightGray:'rgb(227, 227, 227)',
        customDarkGray:'rgb(131, 132, 133)',
        customDarkBrown:'rgb(116, 94, 57)',
        customLightGold:'rgb(116, 94, 57)',
        customSeaShell:'rgb(255, 251, 245)',
        customBlack:'rgb(21, 24, 26)',
        customLightBlack:'rgb(45, 45, 45)',
        customOrange:'rgb(246, 108, 59)',
        customGradient:'linear-gradient(90deg, rgb(241, 98, 34) 0%, rgb(243, 116, 33) 26%, rgb(246, 141, 30))',
        customGainsboro:'rgb(227, 227, 227)',  
        customBorderBlack:'rgb(31,31,31)',
        customGrey:'rgb(178, 178, 178)',
        customLigtherBlack:'rgb(20, 20, 20)',
        customBorderBlack1:'rgb(64, 63, 63)',
        customGreyBlack:'rgb(248, 248, 248)',
        customAverageGrey:'rgb(173, 173, 174)',
        customBlackGrey:'rgb(151, 151, 151)',
        customLighterBlue:'rgb(246, 251, 251)',
        customYellow:'rgb(255, 193, 71)',
        customLightYellow:'rgb(255, 246, 243)',
        customWhite:'rgb(255, 255, 255)',
        customBorderLightGrey:'rgb(241, 242, 242)',
        customBorderLighterGrey:'rgb(195, 195, 195)',
        customLightColorGrey:'rgb(187, 187, 187)',
        customBorderGrey:'rgb(94, 95, 96)',
        background: '#39302d'
      },
      backgroundImage: {
        'radial-gradient-dots': `radial-gradient(60% 60% at 50% 50%, rgba(21, 24, 25, 0.5) 0%, rgb(21, 24, 26) 100%), radial-gradient(currentColor 1px, transparent 1px)`, 
        'text-gradient': 'linear-gradient(113deg, rgb(0, 71, 255) 9.94%, rgb(0, 194, 255) 90%)',
        'text-gradientThunder':'linear-gradient(112deg, rgb(250, 0, 255) -3.21%, rgb(255, 138, 0) 97.8%)',

      },
    },
  },
  plugins: [
    
  ],
};
