/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: ['Poppins', 'sans-serif'],
            titleFont: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [require('daisyui')],
};
