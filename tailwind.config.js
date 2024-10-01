/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Pages/**/*.cshtml',
    './Views/**/*.cshtml',
     './wwwroot/**/*.js',
    './wwwroot/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        vinotinto: '#8B0000',
        terracota: '#E2725B',
        celeste: '#00BFFF',
        contraste: '#FF6347',  // un tono rojizo
      }
    },
  },
  plugins: [],
}

