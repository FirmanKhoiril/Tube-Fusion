/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ["#965ed5"],
        secondary: ["#5139AA"],
      },
      backgroundColor: {
        dark: ["#2C2B33"],
        primary: ["#965ed5"],
        secondary: ["#5139AA"],
        darkPrimary: ["#2A2828"]
      }
    },
  },
  plugins: [
    {
      "plugins": ["prettier-plugin-tailwindcss"]
    }
  ],
}

