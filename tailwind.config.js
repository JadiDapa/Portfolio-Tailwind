/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
        xl: "1000px",
      },
    },
  },
  plugins: [],
};
