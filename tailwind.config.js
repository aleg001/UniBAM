/* eslint-disable @typescript-eslint/no-require-imports  */

const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,jsx,ts,tsx}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      full: '100% !important',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      '2xs': '375px',
      xs: '450px',
      sm: '575px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Poppins as default font
      },
      fontWeight: {
        inherit: 'inherit',
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        black: '#000000',
        white: '#ffffff',
        'cynical-black': '#171717',
        'granulated-sugar': '#FFFBF2',
        'ancient-stone': '#DDDAD3',
        sassy: '#C48564',
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms',
        slideUp: 'slideUp 300ms',
        wiggle: 'wiggle .75s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('tailwindcss-animate'),
    require('tailwindcss-3d'),
    require('tailwindcss-radix')(),
    plugin(({ addVariant }) => {
      addVariant('mac', '.mac &')
      addVariant('windows', '.windows &')
      addVariant('ios', '.ios &')
    }),
  ],
  daisyui: {
    themes: ['bumblebee'], // DaisyUI theme
  },
}
