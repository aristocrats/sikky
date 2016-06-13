const buble = require('rollup-plugin-buble');
const istanbul = require('rollup-plugin-istanbul');
const TypeScript = require('rollup-plugin-typescript');
const multiEntry = require('rollup-plugin-multi-entry').default;
const tsConfig = require('./tsconfig.json');
const tsc = require('typescript');

const isCI = process.env.CONTINUOUS_INTEGRATION === 'true';

module.exports = (config) => {
	config.set({
		files: [
			'./tests/**/*.ts'
		],

		preprocessors: {
			'./src/**/*.ts': ['rollup'],
			'./tests/**/*.ts': ['rollup']
		},
		rollupPreprocessor: {
			rollup: {
				plugins: [
					multiEntry(),
					TypeScript(
						Object.assign(tsConfig.compilerOptions, {
							typescript: tsc,
							target: 'es5',
							module: 'es6',
							declaration: false
						})
					),
					buble({
						exclude: 'node_modules/**'
					}),
					istanbul({
						include: ['**/*.ts'],
						ignore: ['**/node_modules/**', '**/tests/**'],
						exclude: ['tests/**/*.ts']
					})
				]
			},
			bundle: {
				sourceMap: false
			}
		},
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'text' },
				{ type: 'lcov' },
				{ type: 'text-summary' },
				{ type: 'json' },
				{ type: 'html' }
			]
		},
		colors: true,
		autoWatch: false,
		browsers: ['Chrome'],
		frameworks: ['mocha', 'chai'],
		reporters: ['mocha', 'coverage'],
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
		// Push 'coveralls' to the reporters array if Travis, Circle or other continuous integration are running
		config.reporters.push('coveralls');
	}
};