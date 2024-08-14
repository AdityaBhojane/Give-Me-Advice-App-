/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/hero.jpg')",
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

