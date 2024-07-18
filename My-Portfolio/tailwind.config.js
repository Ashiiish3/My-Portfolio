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
        designColor: "#ff014f",
        borderColor: "#d1d6db",
        textDarkMode: "#c4cfde",
      },
      boxShadow: {
        boxShadowLightMode: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        boxShadowDarkMode: "5px 5px 16px #000000, -5px -5px 16px #545151"
      },
      backgroundImage: {
        linearGradients : "linear-gradient(145deg, #6a67ce, #fc636b)",
        bannerBgColor: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
      },
      animation:{
        gradient: "gradients 3s ease infinite"
      }
    },
  },
  plugins: [],
}

