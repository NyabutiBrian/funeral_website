/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        primary: '#303D34',
        secondary: '#FFF0E2',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [require("daisyui")],
}
