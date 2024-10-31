/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EC8A20',    // Orange
        'secondary': '#C98142',  // Brown/Orange
        'accent': '#38C5CA',     // Turquoise
        'light': '#FEFAE1',      // Light Cream
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}