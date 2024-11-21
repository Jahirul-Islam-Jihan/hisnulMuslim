/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps.{js,jsx,ts,tsx}",
    "./apps/**/*.{js,jsx,ts,tsx}",
    "**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
       
      },
    },
  },
  plugins: [],
};