const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Helvetica', 'Quicksand', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    colors: {
      ...colors,
      'blueGray-50': '#F8FAFC',
      'blueGray-100': '#F1F5F9',
      'blueGray-200': '#E2E8F0',
      'blueGray-300': '#CBD5E1',
      'blueGray-400': '#94A3B8',
      'blueGray-500': '#64748B',
      'blueGray-600': '#475569',
      'blueGray-700': '#334155',
      'blueGray-800': '#1E293B',
      'blueGray-900': '#0F172A',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
