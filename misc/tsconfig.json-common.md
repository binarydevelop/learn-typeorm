### tsconfig.json
---
### Contents
1. [Introduction](#Introduction)
2. [Common Options](#Common)
3. [All Available Options](#All)
---
#### Introduction
- The presence of a tsconfig.json file in a directory indicates that the directory is the root of a       TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.
- This file contains the typescript configuration that should be set in every Typescript Project.
- If you have a `tsconfig.json` file then running tsc will build all the ts files. To enable watch mode we can use  `-w or  --watch`
- To intialize a tsconfig we can use `tsc --init `
- The Options are set as follows: 
``` typescript
{
   "compilerOptions": {
      "lib": [
         "es5",
         "es6"
      ],
      "target": "es5",
      "module": "commonjs",
      "moduleResolution": "node",
      "outDir": "./build",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "sourceMap": true
   }
}
```
[x] [Typescript Options available in tsconfig.json](https://www.typescriptlang.org/tsconfig)
- There are several options whihch can be set in `tsconfig.json` but we will only deal with compiler options for now.
### Common Options
Option              |      Definition
------------------  | ----------------------
target              | target tells TS which ES specification you want the final/transpiled code to support. If you configure it as ES5, TS will down compile the syntactic features to ES5, so any arrow functions () => {} in your code will be transformed to function () {}.
lib                 | Whatever you choose for target affects the default value of lib which in turn tells TS what type definitions to include in your project. If you have "target": "es5", the default value of lib will be ["dom", "es5", "ScriptHost"]. It's assuming which functional features the browser will support at runtime. Adding things to lib it's just to make TS happy - you still need to import the polyfill yourself in the project. {polyfill - Javascript code that runs modern features on older browsers}
module              | Sets the module system for the program. [CommonJs, UMD, AMD, System, ESNext, ES2020,]
moduleResolution    | Specify the module resolution strategy: 'node' (Node.js) or 'classic' (used in TypeScript before the release of 1.6). Probably won’t need to use classic in modern code.
outDir              | If specified, .js (as well as .d.ts, .js.map, etc.) files will be emitted into this directory. The directory structure of the original source files is preserved;
emitDecoratorMetadata | The decorator metadata is needed if you want to reflect over the metadata at runtime.
esModuleInterop      | With flag esModuleInterop we can import CommonJS modules in compliance with es6 modules spec.
### All Available Options
All compiler Options are listed below: 
``` ts
{
  "compilerOptions": {
    /*  https://aka.ms/tsconfig.json  */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    //"target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    //"module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./dist",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    // "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,      /* Include 'undefined' in index signature results */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    //"esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    //"skipLibCheck": true,                     /* Skip type checking of declaration files. */
    //"forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}
```

### Understanding esModuleInterop in tsconfig file - Problem statement
Problem occurs when we want to import CommonJS module into ES6 module codebase.

Before these flags we had to import CommonJS modules with star (* as something) import:
``` ts
// node_modules/moment/index.js
exports = moment
// index.ts file in our app
import * as moment from 'moment'
moment(); // not compliant with es6 module spec

// transpiled js (simplified):
const moment = require("moment");
moment();
We can see that * was somehow equivalent to exports variable. It worked fine, but it wasn't compliant with es6 modules spec. In spec, the namespace record in star import (moment in our case) can be only a plain object, not callable (moment() is not allowed).
```
> Solution
With flag esModuleInterop we can import CommonJS modules in compliance with es6 modules spec. Now our import code looks like this:

``` ts
// index.ts file in our app
import moment from 'moment'
moment(); // compliant with es6 module spec

// transpiled js with esModuleInterop (simplified):
const moment = __importDefault(require('moment'));
moment.default();
```
It works and it's perfectly valid with es6 modules spec, because moment is not namespace from star import, it's default import.

But how does it work? As you can see, because we did a default import, we called the default property on a moment object. But we didn't declare a default property on the exports object in the moment library. The key is the __importDefault function. It assigns module (exports) to the default property for CommonJS modules:

``` ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
```
As you can see, we import es6 modules as they are, but CommonJS modules are wrapped into an object with the default key. This makes it possible to import defaults on CommonJS modules.

__importStar does the similar job - it returns untouched esModules, but translates CommonJS modules into modules with a default property:

``` ts
// index.ts file in our app
import * as moment from 'moment'

// transpiled js with esModuleInterop (simplified):
const moment = __importStar(require("moment"));
// note that "moment" is now uncallable - ts will report error!
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
```
### Synthetic imports
And what about allowSyntheticDefaultImports - what is it for? Now the docs should be clear:

> Allow default imports from modules with no default export. This does not affect code emit, just typechecking.

In moment typings we don't have specified default export, and we shouldn't have, because it's available only with flag esModuleInterop on. So allowSyntheticDefaultImports will not report an error if we want to import default from a third-party module which doesn't have a default export.