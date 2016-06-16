import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import strip from 'rollup-plugin-strip';
import nodeResolve from 'rollup-plugin-node-resolve';

const PRODUCTION = process.env.NODE_ENV === 'production';
const DEVELOPMENT = process.env.NODE_ENV === 'development';

export default {
	entry: 'dist/sikky.js',
	useStrict: false,
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
		nodeResolve({ jsnext: true, main: true }),
		commonjs({ include: 'node_modules/**' }),
		strip({ debugger: PRODUCTION ? true : false }),
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		buble(),
	],
	targets: [
		{
			dest: `dist/sikky.${PRODUCTION ? 'min.es5.js' : 'es5.js'}`,
  format: 'umd',
	moduleName: 'sikky',
	sourceMap: true
    }
  ]
};
