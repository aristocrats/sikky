# 0.3.0

- improved `TSLint` rules. Equal to `Angular 2`
- refactored `package.json`
- refactored `README.md`

# 0.2.8

- force linting of source files when running the build task

# 0.2.5

- improved and refactored `Travis CI`
- added support for `Circle CI` to catch up with `Angular 2`
- removed a deprecated file
- updated dependencies

## v.0.2.4

- added a watch option, to watch the TC files and trigger recompilation on changes.
- improved error checking for TC 
- JavaScript files are not allowed to be compiled

## v.0.2.3

- reduced the size of the workflow. Less configuration files

## v.0.2.2

- improved linting and added new rules
- updated readme

## v.0.2.0

- improved TS 2.0 Pre support
- renamed file extension on a couple of files

## v.0.1.24

- improved UT tests with Karma as the test runner

## v.0.1.23

- `karma.conf` converted to TypeScript

## v.0.1.22

- updated readme
- added mocha reporter to Karma

## v.0.1.21

- refactoried how unit testing works
- uses npn@types by default

## v.0.1.20

- updated dependencies

## v.0.1.9

- added support for environment variabels
- support development and production build. Production build get minified.
- added vscode settings
- updated dependencies
- added info about `async/await` in the `README.md`

## v.0.1.7

- activated more option in tsconfig.js for supporting `ES2016` features such as `async/await`

## v.0.1.6

- BC! Tests no longer runs on node.js, but uses `Karma`
- BC! Transpile by default down to `ES6`` with TS.
- added `Karma` + `Mocha` + `Chai` testing stack
- added `TDD support``
- TC config options moved into `package.json``
- use TypeScript for UT
- improved performance
- updated dependencies

## v.0.1.1

- added banner support for development build
- library name no longer hardcoded. Everything is taken from `package.json``.
- improved bundling
- updated dependencies