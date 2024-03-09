/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        markoOne: ["Marko One", "serif"],
        kavoon: ["Kavoon", "serif"],
        jaldi: ["Jaldi", "sans-serif"]
      },
    },
  },
  plugins: [],
}