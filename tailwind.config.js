/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBrown: '#7B4B35',
        softCocoa: '#A36D5C',
        warmCaramel: '#C79A7D',
        deepMocha: '#4E3629',
        goldenBrown: '#D9A066',
        earthyTan: '#BFA18F',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(8deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-8deg)' },
        },
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
