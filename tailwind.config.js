/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        montserrat: ['var(--font-montserrat)']
      },
      animation: {
        fade: 'fadeIn 1s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    },
    colors: {
      primary: '#4942E4',
      white: '#FFF',
      black: '#000000',
      gray: {
        100: '#F0F0F0',
        300: '#d1d5db'
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
    }
  ]
}
