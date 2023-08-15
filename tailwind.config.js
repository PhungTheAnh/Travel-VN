/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#4366c5",
        "darkCharcoal":"#333333",
        "graniteGray":"#666666",
      },
      lineClamp: {
        8: "8",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(15%)' },
          '50%': { transform: 'translateX(-15%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
