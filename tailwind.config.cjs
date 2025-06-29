/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
     colors: {
        primary: "#1E88E5",       // Main brand blue
        secondary: "#43A047",     // Success green
        success: "#43A047",       // Also green for success
        error: "#E53935",         // Red for errors/danger
        warning: "#FDD835",       // Yellow for alerts/warnings

        background: {
          DEFAULT: "#F5F5F5",     // App background
          panel: "#FFFFFF",       // Cards, forms
        },

        text: {
          primary: "#212121",     // Main text
          secondary: "#757575",   // Secondary text, placeholders
          disabled: "#BDBDBD",    // Disabled text
        },

        border: "#E0E0E0",         // General border color
        hoverBlue: "#1565C0",      // For hover state on primary
        lightBlue: "#E3F2FD",      // Optional UI blue tint
      },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "375px" },
    },

  },
  plugins: [],
};