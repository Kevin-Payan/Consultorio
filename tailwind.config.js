/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("./src/assets/check-solid.svg")',
      },
      colors: {
        navyBlue: "#05445e",
        blueGrotto: "#189ab4",
        blueGreen: "#75e6da",
        babyBlue: "#d4f1f4",
      },
    },
  },
  plugins: [],
};
