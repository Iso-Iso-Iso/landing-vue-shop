const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,pug}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      full: "1 1 100%",
    },
    extend: {
      boxShadow: {
        under: " 0px 4px 8px rgba(17, 24, 39, 0.1)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      primary: "#162ECE",
      footer: "#474B5D",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
