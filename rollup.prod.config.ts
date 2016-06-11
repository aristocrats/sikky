const buble = require('rollup-plugin-buble');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');
const pkg = require('./package.json');
export default {
    entry: 'dist/sikky.js',
    useStrict: false,
    plugins: [
        replace({
            'process.env.NODE_ENV': "'production'"
        }),
        buble(),
        uglify({
            warnings: false,
            compress: {
                screw_ie8: true,
                dead_code: true,
                unused: true,
                drop_debugger: true
            }
        })
    ],
    targets: [
        {
            dest: 'dist/' + pkg.name + '.es5.min.js',
            format: 'umd',
            moduleName: pkg.name,
            sourceMap: true
        }
    ]
};
