/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xl': '1.375rem',
      },
      lineHeight: {
        heading: '2.625rem',
      },
      borderRadius: {
        theme: '0.625rem',
      },
      colors: {
        'theme-dark': '#0E1117',
        'theme-blue': '#120D2D',
      },
    },
  },
  plugins: [],
}
