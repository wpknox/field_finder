/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: ['light', 'garden', 'dark', 'cupcake']
	},

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
