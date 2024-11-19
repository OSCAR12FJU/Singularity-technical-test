/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
        'input': 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        'card': ' rgba(0, 0, 0, 0.1) 0px 4px 12px',
        
        },
      width:{
        '18': '70px',
      },
      height:{
        '18': '70px',
      },
      clipPath: {
        'rounded-bg': 'circle(70% at 50% 30%)',
      },

      },
    },
  plugins: [],
}

