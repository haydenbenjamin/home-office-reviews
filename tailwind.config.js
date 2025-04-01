/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
      },
      colors: {
        'accent-purple': '#8B5CF6',
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
      },
    },
  },
  darkMode: 'class',
}
