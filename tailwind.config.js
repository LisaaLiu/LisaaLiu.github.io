/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#145733',    // Custom color variable
        secondary: '#83B369',  // Another custom color variable
        buttons: '#D7E5C7',
        other: '#F3FBE4',
      }
    },
  },
  plugins: [],
}

