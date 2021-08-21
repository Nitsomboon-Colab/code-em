module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E06C75',
        secondary: '#D29A67',
        backgroundDark: '#1a222e',
        designDark: '#2e333d',
        designDarker: '#1C1F26',
        designLight: '#343945',
        starGold: '#FB8200',
      },
      
    },
    // container: {
    //   screens: {
    //     'sm': '640px',
    //     'md': '768px',
    //     'lg': '1024px',
    //     'xl': '1280px',
    //   }
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}