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
    },
  },
  plugins: [],
};
