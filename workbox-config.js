module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,html,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};