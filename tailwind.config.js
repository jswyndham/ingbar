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
			screens: {
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				smx: '500px',
				// => @media (min-width: 640px) { ... }

				md: '710px',
				// => @media (min-width: 768px) { ... }

				smd: '830px',

				lg: '985px',
				// => @media (min-width: 1024px) { ... }

				xl: '1150px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1500px',
				// => @media (min-width: 1536px) { ... }

				'3xl': '1800px',

				'4xl': '2000px',

				'5xl': '2300px',
			},
			backgroundImage: {
				'menu-image': "url('./images/ing-records.jpg')",
			},
		},
	},
	plugins: [],
};
