/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Akrobat']
			},
			fontWeight: {
				light: '300',
				base: '400',
				medium: '600',
				bold: '700',
				black: '900'
			}
		}
	},
	plugins: []
};
