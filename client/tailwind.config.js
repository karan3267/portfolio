/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#474B4F",
        color2: "#6B6E70",
        dark: "#222629",
        dgreen: "#61892F",
        lgreen: "#86C232",
        secondary:"#6E32C2",
        teritary:"#32C2B6",
        color3:"#C2323E",
      },
    },
    screens: {

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
