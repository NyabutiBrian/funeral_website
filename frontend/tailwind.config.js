/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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

