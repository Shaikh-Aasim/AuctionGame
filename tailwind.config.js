/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Great Vibes'],
      custom: ['Rubik Vinyl'], // Add your font
      ububtu: ['Ubuntu'],
      Orbitron: ['Orbitron'],
      Anton: ['Anton']
    }
  },
  plugins: [],
}

