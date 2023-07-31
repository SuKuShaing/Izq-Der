module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,jpg,svg,html,js,json,md,mp3}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};