/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                ['ua-blue']: 'rgba(var(--color-ua-blue) / <alpha-value>)',
                ['ua-yellow']: 'rgba(var(--color-ua-yellow) / <alpha-value>)',
                text: 'rgba(var(--color-text), <alpha-value>)',

            },
        },
    },
    plugins: [],
};
