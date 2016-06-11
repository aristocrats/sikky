## Sikky

[![Build Status](https://travis-ci.org/Kflash/sikky.svg?branch=master)](https://travis-ci.org/Kflash/sikky)

A very fast, and very small boilerplate. Uses `TypeScript 2.0 Pre` to compile down to `ES2016`. From there, you can choose to use a `Rollup` and `Bublé` 
combo to bundle down to `ES2015`.

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

* `npm run build:ts` - transpile TypeScript down to ES2015 with experimental support for ES2016 decorators
* `npm run build` - transpile down to ES5 and builds a bundle both for development and production
* `npm run build:dev` - transpile down to ES5 and builds a bundle for development
* `npm run build:prod` - transpile down to ES5 and builds a bundle for production
* `npm run lint` - validates all TypeScript files

## Why TypeScript, Rollup and Buble?

TypeScript doesn't offer much more than just  selecting the module export type, and it bundles down to a horrible `ES5` code. 
So my choice TypeScript is set to bundle down to `ES5` with experimental support for `ES7` decorators. From there it's up to you 'if you wannt to transpile down to a clean`ES2015` bundle. If so, you would need a real `ES2015 compiler`.

Babel is the people's favorite, but it's not quick enough, and provides additional code in your bundled files for example if you are using `ES2016` classes. So the choice fell on `Bublé`.

For the bundler itself, both Webpack and Browserify also give you additional code in your bundled files. I wanted a quick build system with clean output. `Rollup` provides this. Clean and nice output with exactly the same code as you developed.
