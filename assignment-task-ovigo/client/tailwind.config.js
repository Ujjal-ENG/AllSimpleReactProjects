/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    // eslint-disable-next-line global-require
    plugins: [require("daisyui")],
};
