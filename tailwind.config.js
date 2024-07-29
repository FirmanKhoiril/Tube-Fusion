/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ["#4A23D5"],
        secondary: ["#5139AA"],
      },
      backgroundColor: {
        dark: ["#2C2B33"]
      }
    },
  },
  plugins: [],
}

