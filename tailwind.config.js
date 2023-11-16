/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#0e0a38",
      },
      width: {
        main: "1024px",
      },
      maxWidth: {
        container: "1320px",
      },
      colors: {
        main: "#0e0a38",
        tgreen: "#ff630e",
      },
    },
  },
  plugins: [],
};
