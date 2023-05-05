/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				"primary": "#F9FAF5",
				"secondary": "#26282C",
			},
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			}
		},
	},
};