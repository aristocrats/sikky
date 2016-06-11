module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		files: [
			'build/sikky.specs.js'
		],
		frameworks: ['mocha', 'chai']
	})
};
