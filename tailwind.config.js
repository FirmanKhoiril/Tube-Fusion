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
        secondary: ["#B2DBDB"],
      },
      backgroundColor: {
        dark: ["#2C2B33"],
        primary: ["#10b981"],
        secondary: ["#B2DBDB"],
        darkPrimary: ["#2A2828"]
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [
    {
      "plugins": ["prettier-plugin-tailwindcss",  'tailwind-scrollbar']
    }
  ],
}

