/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        pastelGreen: '#A8D5BA',
        lightBeige: '#FDF6F0',
        textDark: '#333333',
      },
    },
  },
  plugins: [],
};