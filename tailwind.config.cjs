/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'gradient-y': 'gradient-y 10s ease infinite',
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'mono': ['Fira Code', ...defaultTheme.fontFamily.mono],
        'gothic': ['Amador']
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '150% 150%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        }
      }
    },
  },
  plugins: [],
}
