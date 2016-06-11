import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

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
            dest: 'dist/sikky.umd.min.js',
            format: 'umd',
            moduleName: 'Sikky',
            sourceMap: true
        }
    ]
};
