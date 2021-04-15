const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ["Oswald", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        gray: colors.blueGray,
        green: {
          DEFAULT: "#9CD650",
          dark: "#2B8B29",
          light: "#76ED47",
          "semi-dark": "#459142",
        },
        yellow: { dark: "#e48900", DEFAULT: "#f4c002" },
        "custom-black": "#191919",
        brown: "#3D2803",
      },
      // height: {
      //   6.87: "110px",
      //   39.5: "633px",
      //   462: "462px",
      // },
      keyframes: {
        slide: {
          "0%": { "margin-top": "-800px" },
          "5%, 25%": {
            " margin-top": "-590px",
          },
          "25%": {
            "margin-top": "-590px",
          },
          "37.5%, 50%": {
            "margin-top": "-400px",
          },
          "62.5%, 75%": {
            "margin-top": "-200px",
          },
          "87.5%, 100%": {
            "margin-top": "0px",
          },
        },
      },
      animation: {
        slide: "slide 15s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
