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
				card_background_bg: "#FAFAFA",
				card_border: "#F1F1F1",
				newletter_bg: " #F5F2FA",
				course_bg: "#FAFAFA",
			},
			animation: {
				transition: "transition 0.7s ease",
			},
		},
	},
	plugins: [],
};
