module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './*.html'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
