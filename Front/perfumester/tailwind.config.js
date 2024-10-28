/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures all files in src folder are included
    './public/index.html', // Include HTML if you're using it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
