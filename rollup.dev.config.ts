import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';

export default {
	entry: 'build/sikky.js',
	useStrict: false,
	plugins: [
		replace({
			'process.env.NODE_ENV': "'development'"
		}),
		buble(),
	],
	targets: [
		{
			dest: 'dist/sikky.js',
			format: 'umd',
			moduleName: 'Sikky',
			sourceMap: true
		}
	]
};
