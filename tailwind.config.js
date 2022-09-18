/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#26BBA4",
        lightPurple: "#6174FF",
        heading: "#4C545C",
        para: "#9EABB2",
      },
      fontFamily: {
        primary: ["Bai Jamjuree", "sans-serif"],
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
