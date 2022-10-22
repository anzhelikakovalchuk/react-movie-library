/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx, js, ts, tsx}',
    './src/components/**/*.{jsx, js, ts, tsx}',
    './src/components/**/**/*.{jsx, js, ts, tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat, sans-serif",
        ],
      },
      colors: {
        'red': '#F65261',
        'gray': '#424242',
        'gray-dark': '#232323',
        'gray-dark-01': '#323232',
        'gray-light': '#606060',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/hero-background.png')",
      },
      arrowImage: {
      
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
