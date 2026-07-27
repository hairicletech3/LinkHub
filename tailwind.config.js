/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  safelist: ["bg-accent-2", "border-accent-2"],
  theme: {
    extend: {
      colors: {
        bg: '#1C1512',
        surface: '#2A2320',
        'surface-2': '#37312E',
        border: '#4E4846',
        muted: '#8E8A89',
        accent: '#E06A3C',
        'accent-2': '#3D5BC7',
      },
      borderRadius: {
        xl2: '18px',
      },
    },
  },
  plugins: [],
}
