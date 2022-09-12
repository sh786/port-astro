/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
    colors: {
      ...colors,
      primary: '#001B2E',
      primaryDark: '#011628',
      accent: '#F14161',
      accentDark: '#EE1B42',
      accentLight: '#F25471',
    },
  },
  plugins: [],
};
