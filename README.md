## Sikky

[![Build Status](https://travis-ci.org/Kflash/sikky.svg?branch=master)](https://travis-ci.org/Kflash/sikky)
[![CircleCI](https://circleci.com/gh/Kflash/sikky.svg?style=svg)](https://circleci.com/gh/Kflash/sikky)
[![Build status](https://ci.appveyor.com/api/projects/status/vibxi4wro4qwbdtw?svg=true)](https://ci.appveyor.com/project/Kflash/sikky)
[![Coverage Status](https://coveralls.io/repos/github/Kflash/sikky/badge.svg?branch=master)](https://coveralls.io/github/Kflash/sikky?branch=master)
[![npm version](https://badge.fury.io/js/sikky.svg)](https://badge.fury.io/js/sikky)
[![npm downloads](https://img.shields.io/npm/dm/sikky.svg)](https://www.npmjs.org/package/sikky)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/kflash/sikky/blob/master/LICENSE.md)

> A very fast, and small sized TypeScript 2.0 boilerplate.

This boilerplate uses `TypeScript 2.0 Pre` to compile down to `ES2015` by default. From there it's up to you if you want to use `Rollup` and `Bublé` to bundle down to a clean `ES2015` bundle.
`Bublé` is used for compability with older browsers. Easy to get rid of or replaced with `Babel`.

Rollup keep track of the environment variabels, and output both a development and a production build. The production build get minified with `uglify`.

A complete bundle time is assumed to be around 4 ms, and 6 ms for the unit tests. Depends on your computer and the size of your source files.

The test stack is done with `Karma` + `Mocha` + `TypeScript`. `Rollup + TS 2.0` are used to pre-compile the UT files before they are picked up by Karma. This can simply be replaced with a `Webpack` or a `Browserify` solution.

## Features

- [x] Statically typed build system for working with [Typescript](https://www.typescriptlang.org/) 2.0 Pre
- [x] [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015 compiler
- [x] [Rollup](http://rollupjs.org/) for bundling
- [x] Consistent code style with [TSLint](https://palantir.github.io/tslint/).
- [x] Intelligent code editing with [VSCode](https://code.visualstudio.com/)
- [x] SourceMap
- [x] TSX / JSX
- [x] Experimental support for [ES7](https://tc39.github.io/ecma262/) decorators.
- [x] async/await and generators support for ES5/ES3
- [x] [Karma](https://karma-runner.github.io/0.13/index.html) as the test runner
- [x] Test Driven Development (TDD)
- [x] [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/) de facto standard
- [x] [Sinon](http://sinonjs.org/) for test doubles
- [x] Environment variabels
- [x] Code Coverage with Istanbul
- [x] Production and development build with [Rollup](http://rollupjs.org/).
- [x] ECMAScript 2015 modules in Node.
- [x] Allow dead code elimination for ES6 modules

## Quick start

The only development dependency of this project is [Node.js](https://nodejs.org/en/). So just make sure you have it installed. Then
type few commands known to every Node developer...

```bash
git clone --depth 1 https://github.com/kflash/sikky.git
cd sikky
# install the project's dependencies
npm install

# dev build
npm run build:dev
# prod build
npm run build:prod
```
... and boom! You have it all setup for you!

## Workflow

* `npm run build` - transpile down to ES5 and builds a bundle both for development and production
* `npm run build:dev` - transpile down to ES5 and builds a bundle for development
* `npm run build:prod` - transpile down to ES5 and builds a bundle for production
* `npm run lint:src` - validates all source files
* `npm run lint:tests` - validates all test files
* `npm run clean` - removed the dist, coverage and build folders
* `npm run clean:build` - remove the build folder
* `npm run clean:dist` - removed the dist folder
* `npm run test` - run all unit tests
* `npm run test:browser` - run all unit tests in the browser
* `npm run test:node` - run all unit tests in the `node.js environment`
* `npm run tdd` - run all unit tests and watch files for changes
* `npm run watch` - watch your TypeScript files and trigger recompilation on changes.

## Bundling

Many workflows let you bundle your code with TS errors, providing many hours of frustration. If you try to bundle your source code
with Sikky, and your code contains errors, you will see something like this in your console:

        `src/sikky.ts(1068,18): error TS2339: Property 'parentElement' does not exist on type`

## Typings

`npm@types` are used by default. No need for exstra installation.

## Watch

With the `npm run watch`, the `TypeScript 2.0` compiler will start in watch mode, and watch input files and trigger recompilation on changes. Dead code elimination for ES6 modules are activated by default, so later on you can use either
`Webpack 2.0` (*early beta stage*) or `Rollup` to perform tree shaking.

The watch task inform you if something is wrong with your code, and can come up with suggestion on how to solve current issue.

```bash
7:28:24 PM - File change detected. Starting incremental compilation...
src/universal/foo.ts(7,10): error TS2348: Value of type 'typeof TeeSpoon' is not callable. Did you mean to include 'new'?
```

## Continuous integration (CI)

`Travis`, `Circle` and `Appveyor` are the only supported `CI`. The configuration is similar to Angular, Microsoft and React.

## Test-driven development (TDD)

It's integrated a `tdd` task for the `Mocha+Chai testing stack` to watch your UT files.

## Code coverage

`Istanbul` are used to generate the coverage report.

## Server testing

 A basic server testing solution with Mocha + Rollup is integrated.

## Async/await

Async/await are only supported for `TS 2.0` with target set to `ES6` or `ES2015`. The TypeScript compiler only support transpilling async / await down to ES2015,
and then the Microsoft team recommend Babel for ES5 bundling. This is out of the scope for this boilerplate.
