### tsconfig.json
---
- The presence of a tsconfig.json file in a directory indicates that the directory is the root of a       TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.
- This file contains the typescript configuration that should be set in every Typescript Project.
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

Option              |      Definition
------------------  | ----------------------
target              | target tells TS which ES specification you want the final/transpiled code to support. If you configure it as ES5, TS will down compile the syntactic features to ES5, so any arrow functions () => {} in your code will be transformed to function () {}.
lib                 | Whatever you choose for target affects the default value of lib which in turn tells TS what type definitions to include in your project. If you have "target": "es5", the default value of lib will be ["dom", "es5", "ScriptHost"]. It's assuming which functional features the browser will support at runtime. Adding things to lib it's just to make TS happy - you still need to import the polyfill yourself in the project. {polyfill - Javascript code that runs modern features on older browsers}
module              | Sets the module system for the program. [CommonJs, UMD, AMD, System, ESNext, ES2020,]
moduleResolution    | Specify the module resolution strategy: 'node' (Node.js) or 'classic' (used in TypeScript before the release of 1.6). Probably won’t need to use classic in modern code.
outDir              | If specified, .js (as well as .d.ts, .js.map, etc.) files will be emitted into this directory. The directory structure of the original source files is preserved;
emitDecoratorMetadata | The decorator metadata is needed if you want to reflect over the metadata at runtime.
