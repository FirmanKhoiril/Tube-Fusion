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
        dark: ["#1e1e1f"],
        primary: ["#10b981"],
        secondary: ["#B2DBDB"],
        darkPrimary: ["#121212"]
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      screens: {
        xs: '550px'
      },
      fontSize: {
        xs: '12px'
      }
      
    },
  },
  plugins: [
    {
      "plugins": ["prettier-plugin-tailwindcss",  'tailwind-scrollbar']
    }
  ],
}

