## Sikky

[![Build Status](https://travis-ci.org/Kflash/sikky.svg?branch=master)](https://travis-ci.org/Kflash/sikky)

A very fast, and very small boilerplate. Uses TypeScript 2.0 Pre to compile down to ES2015. From there Rollup and Buble will do the magic.
A complete bundle time is assumed to be around 0.4 ms. Depends on your computer.

## Features

- [x] [Typescript](https://www.typescriptlang.org/) 2.0 Pre
- [x] [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015 compiler
- [x] [Rollup](http://rollupjs.org/) for bundling
- [x] SourceMap
- [x] TSX / JSX
- [x] Experimental support for ES7 decorators.
- [x] Async, await and generators in ES5

## Workflow

* `npm run tsc` - transpile TypeScript down to ES2015
* `npm run build` - build bundle both for development and production
* `npm run build:dev` - builds bundle for development
* `npm run build:prod` - builds bundle for production
