/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration : {
        1500 : '1500',
        2000 : '2000',
        2500 : '2500',
        3000 : '3000',
        3500 : '3500',
      },
      letterSpacing: {
        verywide : '.5em'
      }
    },
  },
  plugins: [],
}