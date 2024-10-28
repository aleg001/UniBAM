/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'amarillo-macondo': '#FFD700',
        'naranja-alba': '#FF7F3F',
        'violeta-orquidea': '#9B5DE5',
        'azul-caribe': '#00BBF9',
        'verde-andino': '#00F5D4',
        'rosa-flamenco': '#FF99C8',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'bumblebee', // Changed from 'cupcake' to 'bumblebee'
      {
        light: {
          primary: '#519903',
          secondary: '#facc15',
          'secondary-focus': '#fcd34d',
          accent: '#ffffff',
          'accent-focus': '#d9f99d',
          neutral: '#064e3b',
          'base-100': '#fef3c7',
          info: '#C8E1E7',
          success: '#DEF29F',
          warning: '#F7E589',
          error: '#F2B6B5',
          negro: '#2B292A',
          blanco: '#FFFFFF',
          'amarillo-macondo': '#FFD700',
          'naranja-alba': '#FF7F3F',
          'violeta-orquidea': '#9B5DE5',
          'azul-caribe': '#00BBF9',
          'verde-andino': '#00F5D4',
          'rosa-flamenco': '#FF99C8',
        },
      },
      {
        dark: {
          primary: '#519903',
          secondary: '#facc15',
          'secondary-focus': '#fcd34d',
          accent: '#ffffff',
          'accent-focus': '#d9f99d',
          neutral: '#064e3b',
          'base-100': '#fef3c7',
          info: '#C8E1E7',
          success: '#DEF29F',
          warning: '#F7E589',
          error: '#F2B6B5',
          negro: '#2B292A',
          blanco: '#FFFFFF',
          'amarillo-macondo': '#f9dc4b',
          'naranja-alba': '#ee8545',
          'violeta-orquidea': '#9766ca',
          'azul-caribe': '#5ccaeb',
          'verde-andino': '#58c08d',
          'rosa-flamenco': '#f4bbd1',
        },
      },
    ],
  },
}
