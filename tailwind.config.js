/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainBackground: "#121212",
				columnBackground: "#1e1e1e",
			},
		},
	},
	plugins: [],
};
