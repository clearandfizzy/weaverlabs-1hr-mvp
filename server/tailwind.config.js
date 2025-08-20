module.exports = {
	content: [
		"src/**/*.{js,ts,jsx,tsx}",
		// "./src.old/pages/**/*.{js,ts,jsx,tsx}",
		// "./src.old/components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				sans: ["Nunito", "ui-sans-serif", "system-ui"],
			},
			colors: {
				header: 'var(--color-header)',
				button: 'var(--color-button)',
				text: 'var(--color-text)',
				bg: 'var(--color-bg)',
			}
		},
	},
	plugins: [],
};
