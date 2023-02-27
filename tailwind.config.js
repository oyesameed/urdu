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
			
      // English
      sans: ['Mont', 'sans-serif'],
			
      // Urdu
      divangiry: ['Divangiry'],
			qamri: ['Qamri'],
      tasmeem: ['tasmeem'],
      kamran: ['kamran'],
      abuzar: ['Abuzar'],
			sadaf: ['Sadaf'],
      ubaid: ['Ubaid'],
      tehreeri: ['Tehreeri'],
      qalam: ['Qalam'],
      shekastah: ['Shekastah']
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
			},

			// Danger 
			'danger': '#95323E',
			'success': '#198046'
		},

		data: {
			'open': 'state=open',
			'closed': 'state=closed'
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
				},
				'loading': {
					'0%, 100%': {
						'transform': 'translate(0px, 0)'
					},
					'50%': {
						'transform': 'translate(150px, 0)',
						'background-color': '#ededed',
						'width': '20px'
					}
				},
				'slide-down': {
					'0%': {
						'height': 0
					},
					'100%': {
						'height': 324
					}
				},
				'slide-up': {
					'0%': {
						'height': 324
					},
					'100%': {
						'height': 0
					}
				}
				
			},
			animation: {
					'fade-in': 'fade-in 0.5s ease-out',
					'loading': 'loading 1s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite',
					'slide-down': 'slide-down 300ms ease-in-out',
					'slide-up': 'slide-up 300ms ease-in-out'
			}
		},
	},
	
	plugins: [],
}
