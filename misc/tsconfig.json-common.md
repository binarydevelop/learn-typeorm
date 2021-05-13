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
lib                 | 