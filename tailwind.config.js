/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This is the standard path
  ],
  theme: {
    extend: {
      // Keep your color customizations here
      colors: {
        light: "#FFFAFF",
        dark: "#1E1E1E",
        "light-text": "#1E1E1E",
        "dark-text": "#FFFAFF",
        primary: "#8A1C7C",
        accent: "#D8315B",
        secondary: "#145C9E",
      },
    },
  },
  plugins: [],
};