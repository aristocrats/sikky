import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
const pkg = require('./package.json');

const PRODUCTION = process.env.NODE_ENV === 'production';
const DEVELOPMENT = process.env.NODE_ENV === 'development';

const config = {
	entry: 'build/' +  pkg.name + '.js',
	useStrict: false,
	banner:
	'/**\n' +
	' * ' + pkg.name + '\n' +
	' * @version ' + pkg.version + '\n' +
	' * @copyright (c) 2016 ' + pkg.author + '\n' +
	' * @license MIT <'+ pkg.homepage + '/blob/master/LICENSE>\n' +
	' */',
	plugins: [
		PRODUCTION ? uglify({
			warnings: false,
			compress: {
				screw_ie8: true,
				dead_code: true,
				unused: true,
				drop_debugger: true
			}
		}) : {},
        nodeResolve({
              jsnext: true,
              main: true
        }),
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // either production or development
		}),
		commonjs({
			include: 'node_modules/**',  // Default: undefined
		}),
		buble(),
	],
	targets: [
		{
			dest: `dist/${pkg.name}.${PRODUCTION ? 'min.js' : 'js'}`,
			format: 'umd',
			moduleName: pkg.name,
			sourceMap: true
		}
	]
};

// Support for Javascript Modules
// NOTE! This will change soon regarding the specs
if (DEVELOPMENT) {
	config.targets.push({
		dest: 'dist/sikky.mjs',
		format: 'es6',
		sourceMap: true
	})
}

export default config;



