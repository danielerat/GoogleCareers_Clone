/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //Adding google fonts
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //Addin our custom color
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
      },
    },
  },
  variants: {
    //Adding first so we can be able to apply designs on a first child
    margin: ["first"],
  },
  plugins: [],
};
