/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,svelte}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['light', 'dark']
	}
};
