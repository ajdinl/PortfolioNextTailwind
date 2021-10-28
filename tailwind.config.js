module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				mybackground: '#efefef',
				myblue: '#38b6ff',
				mygreen: '#008037',
				mygrey: '#5b5e66',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
