/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  
  presets: [require('nativewind/preset')],

  darkMode: 'class', // ✅ Enables class-based dark mode support

  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        darkBackground: '#121212',
      },
    },
  },

  plugins: [],
};
