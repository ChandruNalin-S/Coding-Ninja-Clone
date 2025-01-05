/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 3s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
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
      },
      backgroundImage: {
        'radial-gradient-dots': `radial-gradient(60% 60% at 50% 50%, rgba(21, 24, 25, 0.5) 0%, rgb(21, 24, 26) 100%), radial-gradient(currentColor 1px, transparent 1px)`
      },
    },
  },
  plugins: [],
};
