/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        futura: ['Futura', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#2F6783',
        'primary-blue-dark': '#0F354C',
        'luce-white': '#fbfafa',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
};
