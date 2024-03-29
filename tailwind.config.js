/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        futura: ['Futura', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        'primary-blue': '#3d84a8ff',
        'primary-blue-dark': '#0F354C',
        'luce-hover-blue': '#2f6783',
        'luce-white': '#fbfafa',
        'rect-blue': '#2F6783',
        'luce-gray': '#e6e6e6',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
