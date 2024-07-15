/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBodyColor: "#212428",
        lightBodyColor: "#ecf0f3",
        textColor: "#757575",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
        borderColor: "#d1d6db"
      },
      boxShadow: {
        boxShadaw: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e"
      }
    },
  },
  plugins: [],
}

