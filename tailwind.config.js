/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        customThemePurple: '#171023'
      },

      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Poppins', 'sans-serif'],
        smooch: ['"Smooch Sans"', 'sans-serif'],
      },

      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
    },
    plugins: [],
  }
}