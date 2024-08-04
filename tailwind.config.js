/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ["#10b981"],
        secondary: ["#059669"],
      },
      backgroundColor: {
        dark: ["#2C2B33"],
        primary: ["#10b981"],
        secondary: ["#059669"],
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

