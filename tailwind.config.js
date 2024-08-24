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
        darkPrimary: ["#1E1E1F"]
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      screens: {
        xs: '550px'
      }
    },
  },
  plugins: [
    {
      "plugins": ["prettier-plugin-tailwindcss",  'tailwind-scrollbar']
    }
  ],
}

