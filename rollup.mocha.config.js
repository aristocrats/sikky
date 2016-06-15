import buble from 'rollup-plugin-buble';
import TSPlugin from 'rollup-plugin-typescript';
import multiEntry from 'rollup-plugin-multi-entry';
const TSConfig = require('./tsconfig.json');
const TypeScript = require('typescript');

export default {
	entry: ['test/**/*.ts'],
	plugins: [
		TSPlugin(
			// 'rollup's typescript plugin are using TS v. 1.8 by default.
			// To be able to use latest TS 2.0 Pre version, we need to overwrite it because.
			// the plugin doesn't automatically pick up the installed TS in 'mode_modules'
			Object.assign(TSConfig.compilerOptions, {
				typescript: TypeScript, // TS 2.0 Pre
				module: 'es6',
				declaration: false
			})
		),
		buble(),
		multiEntry()
	],
	intro: 'require("source-map-support").install();var chai = require("chai");var sinon = require("sinon");',
	dest: 'build/test-bundle.js',
	sourceMap: true
};

