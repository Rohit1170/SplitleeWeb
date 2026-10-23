/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b100e',
        forest: '#111715',
        panel: '#131b18',
        card: '#1a2220',
        card2: '#202a27',
        line: '#26312d',
        mint: { DEFAULT: '#2fce96', deep: '#248b6e' },
        lime: '#c8f26d',
        glass: '#e6ede4',
        ink: '#0d1411',
        muted: '#8c9a95',
        coral: '#f2675a',
        amber: '#f0b445',
        violet: '#7b6cf6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        brand: ['"Playwrite IT Trad Variable"', 'cursive'],
      },
      borderRadius: { panel: '32px' },
      letterSpacing: { tightest: '-0.035em', mark: '-0.06em' },
    },
  },
  plugins: [],
};
