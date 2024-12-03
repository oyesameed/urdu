module.exports = {

	content: [
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js,jsx}',
		'./ui/**/*.{html,js,jsx}'
	],

	// Define theme
	theme: {

		// Fonts
		fontFamily: {
			sans: ['Mont', 'sans-serif']
		},

		// Font size
		fontSize: {
			'xs': '0.6rem',
			'sm': '0.7rem',
			'base': '0.8rem',
			'lg': '2rem',
			'title': '5rem',
			'h1': '3rem',
			'h2': '1.5rem',
			'h3': '1.2rem',
			'h4': '1rem'
		},

		extend: {

			keyframes: {
				'fade-in': {
					'0%': {
						'opacity': '0'
					},
					'100%': {
						'opacity': '1'
					},
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out'
			}
		},
	},

	plugins: [],
}
