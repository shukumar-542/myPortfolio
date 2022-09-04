/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        "big":"40rem"
      },
      screens:{
        "sm":"480px"
      },
    },
   
  },
  plugins: [],
}
