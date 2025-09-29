/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)", "sans-serif"], // default ke Rubik
      },
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.5)',
        DEFAULT: '2px 2px 6px rgba(0,0,0,0.6)',
        lg: '4px 4px 10px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': { textShadow: '1px 1px 2px rgba(0,0,0,0.5)' },
        '.text-shadow': { textShadow: '2px 2px 4px rgba(0,0,0,0.6)' },
        '.text-shadow-lg': { textShadow: '4px 4px 6px rgba(0,0,0,0.7)' },
      })
    }
  ],
}
