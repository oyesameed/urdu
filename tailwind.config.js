// Configuration for Tailwind

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

		// Colors
		colors: {
			
			// Gray
			gray: {
				1 : '#121217', 
				2 : '#17171C', 
				3 : '#1B1B22', 
				4 : '#202027', 
				5 : '#232329'
			},

			// White
			white: {
				1 : '#EDEDED',
				2 : '#8C8C8C',
			},

			// Accent
			accent: {
				1: '#00FFFF',
			}
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
