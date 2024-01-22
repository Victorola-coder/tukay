/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: "#EBFFB7",
        primary: "#00545F",
        greeen: "#001B1F",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        jar: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
