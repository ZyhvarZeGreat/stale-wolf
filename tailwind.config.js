/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test-img': "url(../public/baby_girl.jpg')"
      },
      fontFamily: {
        'clash': ['"Clash Display"', 'sans-serif'],
        'graphik': ['Graphik', 'sans-serif']
      },
      keyframes: {
        wiggle: {
          '0% , 100%': { transform: 'rotate(-13deg)' },
          '50%': { transform: 'rotate(13deg)' }
        },
        jello: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: "scale3d(1.05, 0.95, 1)" },
          '100%': { transform: "scale3d(1, 1, 1)" }
        }
      },
      animation: {
        wiggle: 'wiggle 0.4s ease-in ',
        jello: 'jello 0.8s ease-out 0.4s'
      }
    },
  },
  plugins: [],
}
