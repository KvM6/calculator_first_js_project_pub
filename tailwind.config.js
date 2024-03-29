/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1024px",
		},
		extend: {
			fontFamily:{
				main: ['"Sixtyfour", sans-serif;"']
			},
			width:{
				md: ['475px']
			}
		},
	},
	plugins: [],
};
