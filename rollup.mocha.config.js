import buble from 'rollup-plugin-buble';
import TSPlugin from 'rollup-plugin-typescript';
import multiEntry from 'rollup-plugin-multi-entry';
const TSConfig = require('./tsconfig.json');
const TypeScript = require('typescript');

export default {
	entry: ['test/**/*.ts'],
	plugins: [
		TSPlugin(Object.assign(TSConfig.compilerOptions, { typescript: TypeScript, module: 'es6',	declaration: false })),
		multiEntry(),
		buble()
	],
	intro: 'require("source-map-support").install();var chai = require("chai");var sinon = require("sinon");',
	dest: 'build/test-bundle.js',
	sourceMap: true
};

