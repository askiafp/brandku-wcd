/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // 'sans' adalah font default. Lo bisa ganti font-nya di sini
        sans: ['Inter', 'sans-serif'], 
        // Atau buat nama custom misal:
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
}