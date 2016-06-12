import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import TypeScript from 'rollup-plugin-typescript';
import multiEntry from 'rollup-plugin-multi-entry';
import glob from 'glob';
import * as TS20Pre from 'typescript';
const tsConfig = require("./tsconfig.json");

export default {
    entry: glob.sync('./tests/**/*.ts').concat(glob.sync('./tests/**/*.tsx')),
    plugins: [
        multiEntry(),
        replace({
            'process.env.NODE_ENV': "'production'"
        }),
        TypeScript(Object.assign(tsConfig.compilerOptions, {
        // Use the TS 2.0 Pre compiler by default
        typescript: TS20Pre,
        target: 'es5',
        module: 'es6',
        declaration: false,
      })),
        buble()
    ],
    targets: [
        {
            dest: "build/test_bundle.js",
            moduleName: 'sikky_iife',
            // For ES2015 bundle, we need to use the 'iife' format
            format: 'iife',
            sourceMap: 'inline'
        }
    ]
};
