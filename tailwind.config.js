// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx}", // Scan all .js and .jsx files in the src folder
    "./public/index.html" // Also scan the public index.html file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Custom primary color (dark blue)
        secondary: "#F59E0B", // Custom secondary color (orange)
        accent: "#D1D5DB", // Custom accent color (light gray)
        background: "#F3F4F6", // Light background color
        card: "#FFFFFF", // White card background color
        border: "#E5E7EB", // Light border color
        success: "#10B981", // Green for success messages or states
        error: "#EF4444", // Red for error messages or states
        info: "#3B82F6", // Blue for informational messages
      },
      spacing: {
        18: "4.5rem", // Add custom spacing
        72: "18rem", // Add custom spacing for larger elements
        128: "32rem", // Custom larger spacing
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Default sans-serif font family
        heading: ["Poppins", "sans-serif"], // Custom font for headings
      },
      fontSize: {
        'xs': '0.75rem', // Custom small font size
        'lg': '1.125rem', // Custom large font size
        'xl': '1.5rem', // Custom extra-large font size
      },
      boxShadow: {
        'default': '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards and buttons
        'hover': '0 6px 12px rgba(0, 0, 0, 0.1)', // Hover effect for elevated elements
        'focus': '0 0 0 3px rgba(59, 130, 246, 0.5)', // Focused input or button state
      },
      gridTemplateColumns: {
        // Custom grid templates for responsive layouts
        'product-grid': 'repeat(auto-fill, minmax(300px, 1fr))',
        'footer': 'repeat(3, 1fr)',
      },
      screens: {
        // Custom breakpoints for responsive design
        sm: '640px', // Mobile screens
        md: '768px', // Tablets and small laptops
        lg: '1024px', // Larger laptops and desktops
        xl: '1280px', // Extra-large screens
        '2xl': '1536px', // For very large screens like 4K monitors
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // This plugin helps style form elements
    require('@tailwindcss/typography'), // This plugin adds typography utilities for rich text
  ],
};
