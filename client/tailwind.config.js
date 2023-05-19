/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F7F7F7", // Light Gray
          card: "#FFFFFF", // White
          deck: "#EAEAEA", // Gray
          header: "#333333", // Dark Gray
          text: {
            primary: "#333333", // Dark Gray
            secondary: "#666666", // Gray
            accent: "#007BFF", // Blue
            success: "#28A745", // Green
            error: "#DC3545" // Red
          }
        },
        dark: {
          color: "#D946EF",
          background: "#242424", // Dark Gray
          card: "#333333", // Dark Gray
          deck: "#1E1E1E", // Darker Gray
          header: "#FFFFFF", // White
          text: {
            primary: "#FFFFFF", // White
            secondary: "#CCCCCC", // Light Gray
            accent: "#FFC107", // Yellow
            success: "#34D399", // Green
            error: "#EF4444" // Red
          }
        }
      }
    },
    plugins: []
  }
};
