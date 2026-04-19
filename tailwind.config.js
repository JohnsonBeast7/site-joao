/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/imgs/bg-hero.webp')",
        'servico-1': "url('/src/imgs/servicos-1.webp')",
        'servico-2': "url('/src/imgs/servicos-2.webp')",
        'servico-3': "url('/src/imgs/servicos-3.webp')",
      },
      fontFamily: {
        open_sans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        source_sans: ['Source Sans 3', 'sans-serif'],
        libertinus: ['Libertinus Serif', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        '1120': '1120px',
      }
    },
  },
  plugins: [],
}