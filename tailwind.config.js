/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lexend: ["'Lexend Deca', sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brown: ["#502d16ff"],
      },
    },
  },
  plugins: [],
}
