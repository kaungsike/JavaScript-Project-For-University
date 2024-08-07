/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {},
  },
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
        },
        ww : {
          100 : "rgba(255, 255, 255, .1)",
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