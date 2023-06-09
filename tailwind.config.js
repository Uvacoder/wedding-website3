/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

const PALETTE = {
  lilac: '#999EBE',
  lightPink: '#F3CEBC',
  persianPlum: '#6B2629',
  eggShell: '#EBE3D6',
  orange: '#BB3E03',
  rifleGreen: '#404D33',
  darkJungleGreen: '#1F201F',
}

module.exports = {
  plugins: [require('daisyui')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-open-sans)`, ...fontFamily.sans],
        serif: [`var(--font-playfair)`, ...fontFamily.serif],
        display: ['var(--font-special)', ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        wedding: {
          primary: PALETTE.persianPlum,
          secondary: PALETTE.rifleGreen,
          accent: PALETTE.orange,
          neutral: PALETTE.lilac,
          'base-100': PALETTE.eggShell,
          'base-content': PALETTE.rifleGreen,
          info: '#42ADBB',
          success: '#16A34A',
          warning: '#F56645',
          error: '#DF1A2F',
        },
      },
    ],
  },
};
