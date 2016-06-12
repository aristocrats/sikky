## Sikky

[![Build Status](https://travis-ci.org/Kflash/sikky.svg?branch=master)](https://travis-ci.org/Kflash/sikky)
[![npm version](https://badge.fury.io/js/sikky.svg)](https://badge.fury.io/js/sikky)
[![npm downloads](https://img.shields.io/npm/dm/sikky.svg)](https://www.npmjs.org/package/sikky)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/kflash/sikky/blob/master/LICENSE.md)

A very fast, and small sized boilerplate. Uses `TypeScript 2.0 Pre` to compile down to `ES2015` by default. From there it's up to you if you want to use `Rollup` and `Bublé` to bundle down to a clean `ES2015` bundle. 
`Bublé` is used for compability with older browsers. Easy to get rid of or replaced with Babel. 

Rollup keep track of the environment variabels, and output both a development and a production build. The production build get minified with `uglify`.

A complete bundle time is assumed to be around 0.4 ms. Depends on your computer and the size of your source files. 

Unit testing are done with `Karma` + `Mocha` + `TypeScript`.

This repo will be continuously updated with the latest technology. There are no plans to integrate NPM packages or other "features" that causes overhead. It will be kept simple, and fast.

If you want something to be added, open an issue ticket and I can see what I can do.

## Features

- [x] Statically typed build system for working with [Typescript](https://www.typescriptlang.org/) 2.0 Pre
- [x] [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015 compiler
- [x] [Rollup](http://rollupjs.org/) for bundling
- [x] Consistent code style with [TSLint](https://palantir.github.io/tslint/).
- [x] Intelligent code editing with [VSCode](https://code.visualstudio.com/)
- [x] SourceMap
- [x] TSX / JSX
- [x] Experimental support for ES7 decorators.
- [x] Async, await and generators
- [x] Karma as the test runner
- [x] Test Driven Development (TDD)
- [x] Mocha & chai de facto standard
- [x] Environment variabels
- [x] Production and development build with `Rollup`.

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

* `npm run build:ts` - transpile TypeScript down to ES2015 with experimental support for ES2016 decorators
* `npm run build` - transpile down to ES5 and builds a bundle both for development and production
* `npm run build:dev` - transpile down to ES5 and builds a bundle for development
* `npm run build:prod` - transpile down to ES5 and builds a bundle for production
* `npm run lint` - validates all TypeScript files
* `npm run tdd` - run all unit tests and watch files for changes

## Typings

`npm@types` are used by default. No need for exstra installation.

## Async/await

Async/await are only supported for TS 2.0 with target set to `ES6` or `ES2015`.
