/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mybackground: '#efefef',
        myblue: '#38b6ff',
        mygreen: '#005C28',
        mygray: '#5b5e66',
        mygraytwo: '#3C3E43',
      },
      animation: {
        'pulse-text': 'pulse-text 4s cubic-bezier(0.4, 0, 0.6, 1) forwards',
      },
      keyframes: {
        'pulse-text': {
          from: { color: 'black' },
          to: { color: 'white' },
        },
      },
    },
  },
  plugins: [],
}
