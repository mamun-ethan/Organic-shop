/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      popping: ["Poppins", "sans-serif"],
    },
    colors: {
      successLight: "#84D187",
      success: "#00B207",
      successDark: "#2C742F",
      warning: "#FF8A00",
      danger: "#EA4B48",
      white: "#ffffff",
      gray: {
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
      },
      greenGray: {
        50: "#EDF2EE",
        100: "#DAE5DA",
        200: "#B4CCB4",
        300: "#96B297",
        400: "#7A997C",
        500: "#618062",
        600: "#406B42",
        700: "#2B572E",
        800: "#173B1A",
        900: "#002603",
      },
    },
    extend: {},
  },
  plugins: [],
};
