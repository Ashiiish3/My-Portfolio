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
        borderColor: "#d1d6db",
        textDarkMode: "#c4cfde"
      },
      boxShadow: {
        boxShadowLightMode: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        boxShadowDarkMode: "5px 5px 16px #000000, -5px -5px 16px #545151"
      }
    },
  },
  plugins: [],
}

