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
			variants: {
				extend: {
					textDecoration: ['after'], // Enable text-decoration utilities on ::after pseudo-elements
					width: ['after'], // Enable width utilities on ::after pseudo-elements
					backgroundColor: ['after'], // Enable background color utilities on ::after pseudo-elements
					inset: ['after'], // Enable position utilities on ::after pseudo-elements
				},
			},
		},
	},
	plugins: [],
};
