module.exports = {
  purge: ["./src/*.vue", "./src/**/*.vue", "./src/**/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Creepster: ["Creepster"],
        Poppins: ["Poppins"],
      },
      spacing: {
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
      minWidth: {
        14: "3.5rem",
      },
      margin: {
        "40%": "40%",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      letterSpacing: {
        tightest: "-.5em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
