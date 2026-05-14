/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00234B",
        secondary: "#28A745",
        background: "#F8F9FA",
        surface: "#FFFFFF",
        outline: "#E9ECEF",
      },
    },
  },
  plugins: [],
}
