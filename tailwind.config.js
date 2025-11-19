
/** @type {import('tailwindcss').Config} */
module.exports = {
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
        shakeFancy: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '10%': { transform: 'translate(5px, -5px) rotate(5deg)' },
          '20%': { transform: 'translate(-5px, 5px) rotate(-5deg)' },
          '30%': { transform: 'translate(6px, -4px) rotate(4deg)' },
          '40%': { transform: 'translate(-6px, 4px) rotate(-4deg)' },
          '50%': { transform: 'translate(5px, -5px) rotate(5deg)' },
          '60%': { transform: 'translate(-5px, 5px) rotate(-5deg)' },
          '70%': { transform: 'translate(4px, -4px) rotate(4deg)' },
          '80%': { transform: 'translate(-4px, 4px) rotate(-4deg)' },
          '90%': { transform: 'translate(3px, -3px) rotate(3deg)' },
        },
        shakeSimple: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-2px)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(8deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-8deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.8)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-35px)' },
        },
        'float-slowest': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-50px)' },
        },
      },
      animation: {
        shakeFancy: 'shakeFancy 0.5s linear infinite',
        shakeSimple: 'shakeSimple 1s ease-in-out infinite',
        swing: 'swing 2s ease-in-out infinite',
        twinkle: 'twinkle 2s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-slower': 'float-slower 12s ease-in-out infinite',
        'float-slowest': 'float-slowest 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
