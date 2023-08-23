/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#4366c5",
                "darkCharcoal": "#333333",
                "graniteGray": "#666666",
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
                    '0%, 100%': {transform: 'translateX(15%)'},
                    '50%': {transform: 'translateX(-15%)'},
                },
                leaf1: {
                    '0%, 100%': {transform: 'rotate(10deg)'},
                    '50%': {transform: 'rotate(-5deg)'},
                },
                leaf2: {
                    '0%, 100%': {transform: 'rotate(10deg)'},
                    '50%': {transform: 'rotate(0)'},
                },
                leaf3: {
                    '0%, 100%': {transform: 'rotate(10deg)'},
                    '50%': {transform: 'rotate(0)'},
                },
            },
            animation: {
                wiggle: 'wiggle 1.5s ease-in-out infinite',
                leaf1: 'leaf1 2s cubic-bezier(0.52, 0, 0.58, 1) 2s infinite',
                leaf2: 'leaf2 3s cubic-bezier(0.52, 0, 0.58, 1) 1s infinite',
                leaf3: 'leaf3 3s cubic-bezier(0.52, 0, 0.58, 1) infinite',
            }
        },
    },
    plugins: [],
}
