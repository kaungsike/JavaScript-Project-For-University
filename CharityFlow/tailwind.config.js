/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        pur : {
          100 : "#9A5999",
          200 : "#391D47",
          300 : "#f9edff",
        },
        yy : {
          100 : "#FFD166"
        },
        bb : {
          100 : "#181618"
        }
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '1px',
      },
    },
    rotate : {
      30 : "30deg"
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: "light",
  },
}