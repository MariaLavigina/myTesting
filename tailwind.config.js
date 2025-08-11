/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    // add your paths here
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        l: "1277px", // your custom breakpoint
      },
    },
  },
  plugins: [],
};
