module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   sm: { max: '740px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      //   md: { min: '768px', max: '1023px' }, // Tablet (matches max: iPad Pro @ 1112px).
      //   md2: {min: '1024px', max: '1377px'},
      //   lg: { min: '1378px' }, // Desktop smallest.
      // },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'Nunito': ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'paleWhite': '#E5E5E5',
        'navGrey':'#606060',
        'heroArrow':'#4d4d4d',
        'heroText':'#7a7a7a',
        'heroOrange':'#FFB84E',
        'heroPurple':'#B044F2',
        'paleBlack':'#292929'
      }
    },
  },
  plugins: [],
}