/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8BE989',
        secondary: '#B2B2B2',
        'gray-dark': '#979797',
        'gray-light': '#F3F3F3',
      },
      boxShadow: {
        sm: '0px 4px 10px 6px rgba(230, 230, 230, 0.24)',
        'button-shaddow': '2px 2px 10px rgba(0, 0, 0, 0.25)',
      },
      padding: {
        30: '120px',
      },
      fontWeight: {
        'custom-bold': 500,
      },
    },
  },
  plugins: [],
};
