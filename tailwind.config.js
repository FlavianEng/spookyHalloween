const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Creepster: ["Creepster"],
        Poppins: ["Poppins"],
      },
    },
    colors: {
      white: colors.white,
      purple: {
        dark: "#1C042C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
