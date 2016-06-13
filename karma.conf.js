const isCI = process.env.CONTINUOUS_INTEGRATION === 'true';

module.exports = (config) => {
	config.set({
		files: [
			'build/test_bundle.js',
			{pattern: "src/**/*.ts", included: false, watched: false},
			{pattern: "tests/**/*.ts", included: false, watched: false}
		],

		preprocessors: {
			'build/test_bundle.js': ["sourcemap"]
		},
		colors: true,
		autoWatch: false,
		browsers: ['Chrome'],
		frameworks: ['mocha', 'chai'],
		reporters: ['mocha'],
		concurrency: 4,
		browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 2,
		browserNoActivityTimeout: 30000,
	});

	// If running a CI environment (eg. Travis or Circle) allocating a browser can take pretty
	// long time (eg. if we are out of capacity and need to wait for another build to finish) and
	// so the `captureTimeout` typically kills an in-queue-pending request, which makes no sense.
	if (isCI) {
		config.captureTimeout = 0;
	}
};
