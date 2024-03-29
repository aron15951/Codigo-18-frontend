/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //aqui se especifica que archivos tendran acceso a tailwind 
    './index.html',
    './src/**/*.{js}',
    './main.js', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

