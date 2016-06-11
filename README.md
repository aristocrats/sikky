## Sikky

[![Build Status](https://travis-ci.org/Kflash/sikky.svg?branch=master)](https://travis-ci.org/Kflash/sikky)

A very fast, and very small boilerplate. Uses `TypeScript 2.0 Pre` to compile down to `ES2015`. From there `Rollup` and `Bublé` will do the magic.
A complete bundle time is assumed to be around 0.4 ms. Depends on your computer.

## Features

- [x] Statically typed build system for working with [Typescript](https://www.typescriptlang.org/) 2.0 Pre
- [x] [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015 compiler
- [x] [Rollup](http://rollupjs.org/) for bundling
- [x] Consistent code style with [TSLint](https://palantir.github.io/tslint/). Supports TypeScript 2.0 
- [x] Intelligent code editing with [VSCode](https://code.visualstudio.com/)
- [x] SourceMap
- [x] TSX / JSX
- [x] Experimental support for ES7 decorators.
- [x] Async, await and generators in ES5

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

* `npm run clean:build` - remove the build directory
* `npm run build` - build bundle both for development and production
* `npm run build:dev` - builds bundle for development
* `npm run build:prod` - builds bundle for production
* `npm run lint` - validates all TypeScript files
* `npm run tsc` - transpile TypeScript down to ES2015

## Why TypeScript, Rollup and Buble?

TypeScript doesn't offer much more than just  selecting the module export type, and it bundles down to a horrible `ES5` code. 
So you would need to transpile down to `ES2015`, and from there use a real `ES2015 compiler`.

Babel is the people's favorite, but it's not quick enough, and provides additional code in your bundled files for example if you are using `ES2016` classes. So the choice fell on `Bublé`.

For the bundler itself, both Webpack and Browserify also give you additional code in your bundled files. I wanted a quick build system with clean output. `Rollup` provides this. Clean and nice output with exactly the same code as you developed.
