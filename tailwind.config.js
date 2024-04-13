/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('./assets/bg.png')",
            }
        },
    },
    plugins: [],
}
