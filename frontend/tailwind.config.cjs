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
				"primary": "#007978",
				"secondary": "#000000",
				red : "#F97068",
				success: "#29A2B2",
			},
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				main: "url('/src/assets/backgrounds/Messhy.svg')"
			},
		},
	},
};