## Sikky

[![Build Status](https://travis-ci.org/Kflash/sikky.svg?branch=master)](https://travis-ci.org/Kflash/sikky)

A very fast, and very small boilerplate. Uses TypeScript 2.0 Pre to compile down to ES2015. From there Rollup and Buble will do the magic.
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

