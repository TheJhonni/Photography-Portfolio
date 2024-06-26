/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'primary': ['Helvetica', 'Arial', 'Tahoma', 'sans-serif'], 
      'secondary': ['Mulish', 'sans-serif'], 
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        secondary: '#172E44',
        tertiary: '#333333',
        orange: '#C67E28',
        grey: '#484B4B', 
        brown:'#524438',

        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
}