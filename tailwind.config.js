/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#0f172a',
        slate:   '#1e293b',
        primary: '#10b981',
        cyan:    '#22d3ee',
        offwhite:'#f1f5f9',
        muted:   '#94a3b8',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
