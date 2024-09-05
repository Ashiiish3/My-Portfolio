/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBodyColor: "#212428",
        lightBodyColor: "transparent",
        textColor: "#757575",
        designColor: "#ff014f",
        borderColor: "#d1d6db",
        textDarkMode: "#c4cfde",
      },
      boxShadow: {
        boxShadowLightMode: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        boxShadowDarkMode: "5px 5px 16px #000000, -5px -5px 16px #545151",
      },
      backgroundImage: {
        linearGradients: "linear-gradient(145deg, #6a67ce, #fc636b)",
        bannerBgColor: "linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      },
      animation: {
        moveGradient: "moveGradient 2s linear infinite",
        spinSetting: "spinSetting 2s linear infinite"
      },
      keyframes: {
        moveGradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      keyframes: {
        spinSetting: {
          "from": {
            "transform": "rotate(0deg)"
          },
          "to" : {
            "transform": "rotate(360deg)"
          }
        }
      },
      backgroundSize:{
        "200%": "200%"
      },
      fontFamily:{
        Montserratt: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
};
