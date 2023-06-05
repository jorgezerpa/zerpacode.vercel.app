/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/commons/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:{
        orbit: 'orbit 3s linear infinite',
        zoomInSpin: 'zoomInSpin 1s linear forwards',
        zoomIn: 'zoomIn 1s linear forwards',
        zoomIn1: 'zoomIn 1s linear forwards .5s',
        zoomIn2: 'zoomIn 1s linear forwards 1s',
        zoomIn3: 'zoomIn 1s linear forwards 1.5s',
        zoomIn4: 'zoomIn 1s linear forwards 2s',
        slideTL: 'slideTL .5s ease forwards 3.3s',
        slideFR: 'slideFR 1s ease-in forwards',
        scaleX: 'scaleX 1s ease-in-out forwards',
        scaleY: 'scaleY .5s ease forwards',
        scaleY2: 'scaleY 1s ease forwards 1s',
        planet: 'planet 4s linear infinite',
        pulseSlow: 'pulse 5s linear infinite',
        bounce2: 'bounce2 1.5s ease-in infinite 3s',
      },
      keyframes:{
        bounce2: {
          '0%': {transform: 'translateY(-3px)', opacity:1},
          '50%': {transform: 'translateY(0)', opacity:1},
          '100%': {transform: 'translateY(-3px)', opacity:1},
        },
        planet: {
          '0%': {transform: 'translateY(20px)'},
          '50%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(20px)'},
        },
        orbit: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        zoomIn: {
          '0%': {transform: 'scale(0)', opacity: 0},
          '100%': {transform: 'scale(1)', opacity: 1},
        },
        zoomInSpin: {
          '0%': {transform: 'scale(0) rotate(150deg)', opacity: 0},
          '100%': {transform: 'scale(1) rotate(0deg)', opacity: 1},
        },
        slideTL: {
          '0%': {transform: 'translate(-30px)', opacity: 0},
          '80%': {transform: 'translate(10px)', opacity: .8},
          '100%': {transform: 'translate(0px)', opacity: 1},
        },
        slideFR: {
          '0%': {transform: 'translate(300px)', opacity: 0},
          '80%': {transform: 'translate(10px)', opacity: .8},
          '100%': {transform: 'translate(0px)', opacity: 1},
        },
        scaleX: {
          '0%': {transform: 'scaleX(0)', opacity: 1},
          '70%': {transform: 'scaleX(1)', opacity: .7},
          '80%': {transform: 'scaleX(.8)', opacity: .8},
          '100%': {transform: 'scaleX(1)', opacity: 1},
        },
        scaleY: {
          '0%': {transform: 'scaleY(0)', opacity: 1},
          '100%': {transform: 'scaleY(1)', opacity: 1},
        },
      }
    },
  },
  plugins: [],
}
