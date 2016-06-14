const buble = require('rollup-plugin-buble');
const istanbul = require('rollup-plugin-istanbul');
const TSPlugin = require('rollup-plugin-typescript');
const multiEntry = require('rollup-plugin-multi-entry').default;
const TSConfig = require('./tsconfig.json');
const TypeScript = require('typescript');

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
					TSPlugin(
					// 'rollup's typescript plugin are using TS v. 1.8 by default. 
					// To be able to use latest TS 2.0 Pre version, we need to overwrite it because.
					// the plugin doesn't automatically pick up the installed TS in 'mode_modules' 
						Object.assign(TSConfig.compilerOptions, {
							typescript: TypeScript, // TS 2.0 Pre
							module: 'es6'
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

	if (isCI) {
		config.captureTimeout = 0;
		// Push 'coveralls' to the reporters array if Travis, Circle or other continuous integration are running
		config.reporters.push('coveralls');
	}
};
