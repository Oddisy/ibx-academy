/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			maxWidth: {
				container: "1535px",
			},
			colors: {
				footer_background_bg: "#131921",
				body_background_bg: "#FFF",
			},
			animation: {
				transition: "transition 0.7s ease",
			},
		},
	},
	plugins: [],
};
