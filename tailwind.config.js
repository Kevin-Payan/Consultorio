/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Open Sans", "sans-serif"],
      },
      listStyleImage: {
        checkmark: 'url("./src/assets/check-solid.svg")',
      },
      colors: {
        babyBlue: "#E4F5FF",
        primary: "#3763db",
      },
      maxHeight: {
        0: "0",
        40: "10rem", // Adjust this value based on your content
      },
    },
  },
  plugins: [],
};
