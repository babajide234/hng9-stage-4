/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2222': '52%',
      },
      colors:{
        'primary':'#A02279',
        'secondary':'#434343',
        'white':'#fff',
      },
      fontSize:{
        'h1':"3rem"
      },
    },
    
  },
  plugins: [],
}
