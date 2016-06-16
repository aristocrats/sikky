import buble from 'rollup-plugin-buble';
import TSPlugin from 'rollup-plugin-typescript';
import multiEntry from 'rollup-plugin-multi-entry';
import TypeScript from 'typescript';
import path from 'path';
const TSConfig = require('./tsconfig.json');

export default {
	entry: ['test/**/*.ts'],
	plugins: [
		multiEntry(),
		TSPlugin(Object.assign(TSConfig.compilerOptions, { typescript: TypeScript, module: 'es6', declaration: false })),
		buble({ exclude: 'node_modules/**' })
	],
	intro: 'require("source-map-support").install();var chai = require("chai");var sinon = require("sinon");',
	dest: 'build/test-bundle.js',
	sourceMap: true
};

