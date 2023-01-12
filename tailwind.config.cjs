/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css,scss,sass}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF733D",
        secondary: "#FFFFFF",
        back: "#000000",
        orangebt: "#FF733D",
        eblack: "#1E1E1E",
      },
      spacing: {
        2.4: "0.580rem",
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        gotham_light: ["Gotham-Light", "sans-serif"],
      },
      screens: {
        si: { max: "1200px" },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
