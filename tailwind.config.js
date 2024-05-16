/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainBackground: "#0D1117",
				columnBackground: "#161c22",
			},
		},
	},
	plugins: [],
};
