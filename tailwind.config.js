/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          dark: '#000000'
        },
        accent: {
          DEFAULT: '#3498db',
          light: '#5dade2',
          dark: '#2980b9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },

      animation: {
        fadeSlideLeft: 'fadeSlideLeft 0.8s ease-out forwards',
        fadeSlideRight: 'fadeSlideRight 0.8s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
} 