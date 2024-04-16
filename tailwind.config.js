/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				shadows: ['Shadows Into Light', 'regular', 'cursive'],
				gochiHand: ['"Gochi Hand"', 'cursive'],
				robotoSlab: ['Roboto Slab', 'serif'],
			},
			backgroundImage: {
				'ing-beer': "url('./src/images/ing-beer.jpg')",
			},
			spacing: {
				25: '100px',
				50: '200px',
			},
		},
	},
	plugins: [],
};
