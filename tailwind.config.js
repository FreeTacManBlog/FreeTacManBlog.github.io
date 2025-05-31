/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'o-blue': 'var(--o-blue)',
        'o-light-blue': 'var(--o-light-blue)',
        'o-dark-blue': 'var(--o-dark-blue)',
        'mgray': 'var(--mgray)',
      },
    },
  },
  plugins: [],
} 