# v.0.5.7

- renamed tests folder to test so it can be found by mocha
- fixed issues with VSCode. Didn't pick up Mocha correctly'
- fixed issues with typings

# v.0.5.6

- updated dependencies.

# v.0.5.5

- updated dependencies. 

# v.0.5.3

- fixed a bug

# v.0.5.0

- replaced `--module` with the new `--lib` param
- solved a watch issue

# v.0.4.11

- TypeScript watch task now support dead code elimination for ES6 modules

# v.0.4.10

- updated TSC with newest version 
- updated readme

# v.0.4.9

- added new flags to TSC for bundling source files
- allow dead code elimination for ES6 modules
- updated TS to newest version

# v.0.4.8

- added .vscodeignore

# v.0.4.7

- improved linting
- fixed it so tests get linted before they are run
- improved Circle CI support

# v.0.4.6

- added Lolex to fake JavaScript timers
- fixed a bug with the unit tests

# v.0.4.5

- support for ECMAScript 2015 modules in Node.

# v.0.4.4

- added Sinon for test doubles
- minor improvements to Karma

# v.0.4.3

- improved TS configuration
- manually force to use latest TS 2.0 Pre version due to issues with @next
- manually force to use latest TSLint version due to issues with @next
- added script commands to remove dist and coverage folder

# v.0.4.0

- refactored unit testing
- added code coverage
- refactored bundling
- fixed readme
- updated dependencies

# v.0.3.6

- fixed bundle bugs

# v.0.3.2

- improved Travis CI. Added before and after script

# v.0.3.0

- improved `TSLint` rules. Equal to `Angular 2`
- refactored `package.json`
- refactored `README.md`

# v.0.2.8

- force linting of source files when running the build task

# v.0.2.5

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