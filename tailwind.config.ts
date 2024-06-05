import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  // for dark mode
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: '#F96162',
        primary: {
          50: 'rgb(var(--color-primary-rgb-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-rgb-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-rgb-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-rgb-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-rgb-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-rgb-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-rgb-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-rgb-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-rgb-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-rgb-900) / <alpha-value>)',
        },
        secondary: {
          50: '#d0f4ff',
          100: '#adddef',
          200: '#8dc2d8',
          300: '#6aa8c0',
          400: '#4e93ad',
          500: '#2d809c',
          600: '#1e718a',
          700: '#095d74',
          800: '#00495f',
          900: '#003447',
        },
        danger: colors.red[500],
        default: 'var(--label-color)',
        disabled: 'var(--label-disabled-color)',
        'high-contrast': 'var(--label-strong-color)',
        allow: 'var(--color-allowlist)',
        watch: 'var(--color-watchList)',
        deny: 'var(--color-denyList)',
      },
    },
  },
  plugins: [],
};
export default config;
