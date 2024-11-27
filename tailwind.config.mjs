/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f8f6',
          100: '#e5efe7',
          200: '#ccdfd0',
          300: '#a4c5ac',
          400: '#75a481',
          500: '#528662',
          600: '#3f6b4d',
          700: '#34563f',
          800: '#2d4535',
          900: '#263a2d',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}