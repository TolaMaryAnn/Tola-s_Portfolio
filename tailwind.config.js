
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.8)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-35px)" },
        },
        "float-slowest": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50px)" },
        },
        shakeSimple: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-5px)" },
          "40%": { transform: "translateX(5px)" },
          "60%": { transform: "translateX(-5px)" },
          "80%": { transform: "translateX(5px)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(8deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-8deg)" },
        },
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-slower": "float-slower 12s ease-in-out infinite",
        "float-slowest": "float-slowest 18s ease-in-out infinite",
        shakeSimple: "shakeSimple 1s ease-in-out infinite",
        swing: "swing 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
