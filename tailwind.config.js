module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'EB Garamond', 'Georgia', 'serif'],
        'mono-jb': ['"JetBrains Mono"', 'monospace'],
        reading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#090d16',
        surface: '#0f172a',
        border: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [require('daisyui')],
}
