module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // Default breakpoints
        sm: "640px",  // Small screens (e.g., tablets)
        md: "768px",  // Medium screens (e.g., small laptops)
        lg: "1024px", // Large screens (e.g., desktops)
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2x large screens
        // Custom breakpoints (optional)
        xxs: "350px", // Small mobile devices
        xxxl: "1920px", // Large desktop or TV screens
      },
    },
  },
  plugins: [],
};
