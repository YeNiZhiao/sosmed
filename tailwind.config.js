module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#303242',
        'secondary': '#476072',
        'komponen': '#548CA8',
        'textPrimary': '#fafafa',
        'wa': '#25D366',
        'ig': '#3f729b',
        'fb': '#3b5998'
      },
      backgroundImage: {
        'elemen': "url('/img/elemen.png')",
        'bgsection': "url('../img/bgsection.jpg')",
      },
      fontFamily: {
        'varela': ['Varela Round', 'sans-serif'],
        'coveat': ['Caveat', 'cursive'],
        'titanium': ['Titillium Web', 'sans-serif']
      }
    },

  },
  plugins: [],
}