/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveAround: {
          "0%": { transform: "translate(0, 0)" },
          "12.5%": { transform: "translate(10px, -10px)" },
          "25%": { transform: "translate(20px, -20px)" },
          "37.5%": { transform: "translate(30px, -10px)" },
          "50%": { transform: "translate(40px, 0)" },
          "62.5%": { transform: "translate(30px, 10px)" },
          "75%": { transform: "translate(20px, 20px)" },
          "87.5%": { transform: "translate(10px, 10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        "move-around": "moveAround 5s infinite ease-in-out",
      },
      fontFamily: {
        default: ["Open Sans", "sans-serif"],
      },
      listStyleImage: {
        checkmark: 'url("./src/assets/check-solid.svg")',
      },
      colors: {
        babyBlue: "#E4F5FF",
        deepSkyBlue: "#00BFFF",
        primary: "#265ee3",
        secondary: "#3ecaed",
        background: "#ffffff",
      },
      maxHeight: {
        0: "0",
        40: "10rem", // Adjust this value based on your content
      },
    },
  },
  plugins: [],
};
