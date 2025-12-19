/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',        // Dark slate/teal base
        secondary: '#1e293b',      // Slightly lighter sections
        accent: '#f97316',         // Your brand orange
        tealHighlight: '#0891b2',  // Teal accent
        textLight: '#f3f4f6',      // Light text
      },
    },
  },
  plugins: [],
}