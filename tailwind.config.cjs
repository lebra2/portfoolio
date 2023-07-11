/** @type {import('tailwindcss').Config} */
module.exports = {
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
        second: '#AAAAAA',
      },

      scale: {
        '200': '2',
        '175': '1.75',
      }
    },
  },
  plugins: [],
}