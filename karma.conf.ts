const isCI = process.env.CONTINUOUS_INTEGRATION === 'true';

module.exports = (config) => {
    config.set({
        browsers: ['Chrome'],
        files: [
            'build/sikky.specs.js',
            {pattern: "src/**/*.ts", included: false, watched: false},
            {pattern: "test/**/*.ts", included: false, watched: false},
        ],
        preprocessors: {
            'build/sikky.specs.js': ["sourcemap"]
        },
        frameworks: ['mocha', 'chai'],
        reporters: ['mocha'],
        colors: true,
        autoWatch: false,
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 2,
        browserNoActivityTimeout: 30000,
    });

    // If running a CI environment (eg. Travis or Circle) allocating a browser can take pretty
    // long time (eg. if we are out of capacity and need to wait for another build to finish) and
    // so the `captureTimeout` typically kills an in-queue-pending request, which makes no sense.
    if (isCI) {
        config.captureTimeout = 0;
    }
};
