/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      }

      ,colors: {
        spotify: '#1DB954',
        soundcloud: '#ff7700',
        youtube: '#FF0000',
        ig: '#3f729b',
        vue: '#41b883',
        tailwind: '#63B3ED',
        python: '#ffe873',
        sql: '#f29111',
        php: '#b0b3d6',
        taust: '#171010',
        navbar: '#423F3E',
        jura: '#2B2B2B'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}