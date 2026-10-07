/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        matcha: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        espresso: {
          400: "#d97706",
          500: "#b45309",
          600: "#92400e",
          700: "#78350f",
          800: "#451a03",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        'glow-matcha': '0 0 50px -10px rgba(74, 222, 128, 0.3)',
        'glow-espresso': '0 0 50px -10px rgba(217, 119, 6, 0.3)',
      }
    },
  },
  plugins: [],
};
