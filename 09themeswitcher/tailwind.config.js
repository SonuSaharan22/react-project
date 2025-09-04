/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // 👈 important for React
  ],
  darkMode: "class",  // 👈 important for dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}

