/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#EC8A20", // Orange
        secondary: "#C98142", // Brown/Orange
        accent: "#38C5CA", // Turquoise,
        "orange-accent": "#CE8849",
        light: "#FEFAE1",
        "light-cream": "#F0D4A9",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        item: ["IBM Plex Sans Arabic", "sans-serif"],
      },
      screens: {
        xs: "475px",
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
