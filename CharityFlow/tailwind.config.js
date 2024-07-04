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
          200 : "#391D47"
        },
        yy : {
          100 : "#FFD166"
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: "light",
  },
}