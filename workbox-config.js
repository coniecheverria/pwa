module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{txt,ico,html,js,css}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};