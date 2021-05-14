### Module resolution
---
##### Contents
- [Introduction](#Introduction)
- [Relative vs. Non-relative module imports](#Relative vs. Non-relative module imports)
- [Module Resolution Strategies](#Module Resolution Strategies)
---
#### Introduction
Module resolution is the process the compiler uses to figure out what an import refers to. Consider an import statement like `import { a } from "moduleA";` in order to check any use of a, the compiler needs to know exactly what it represents, and will need to check its definition moduleA.

At this point, the compiler will ask “what’s the shape of moduleA?”
First, the compiler will try to locate a file that represents the imported module. To do so the compiler follows one of two different strategies: Classic or Node. These strategies tell the compiler where to look for moduleA.
If that didn’t work and if the module name is non-relative (and in the case of "moduleA", it is), then the compiler will attempt to locate an ambient module declaration. 
Finally, if the compiler could not resolve the module, it will log an error. In this case, the error would be something like error TS2307: Cannot find module 'moduleA'.

#### Relative vs. Non-relative module imports
Module imports are resolved differently based on whether the module reference is relative or non-relative.A `relative import` is one that starts with /, ./ or ../. Some examples include:
``` ts
import Entry from "./components/Entry";
import { DefaultHeaders } from "../constants/http";
import "/mod";
```
A relative import is resolved relative to the importing file and cannot resolve to an ambient module declaration. You should use relative imports for your own modules that are guaranteed to maintain their relative location at runtime.


Any other import is considered `non-relative`. Some examples include:
``` ts
import * as $ from "jquery";
import { Component } from "@angular/core";
```
A non-relative import can be resolved relative to baseUrl, or through path mapping.


##### Module Resolution Strategies
There are two possible module resolution strategies: Node and Classic. You can use the --moduleResolution flag to specify the module resolution strategy. If not specified, the default is Node for --module commonjs, and Classic otherwise (including when --module is set to amd, system, umd, es2015, esnext, etc.).
#### classic 
This used to be TypeScript’s default resolution strategy. Nowadays, this strategy is mainly present for backward compatibility.

A relative import will be resolved relative to the importing file. So import `{ b } from "./moduleB"` in source file `/root/src/folder/A.ts` would result in the following lookups:

>/root/src/folder/moduleB.ts
>/root/src/folder/moduleB.d.ts

For non-relative module imports, however, the compiler walks up the directory tree starting with the directory containing the importing file, trying to locate a matching definition file.
For example:

A non-relative import to moduleB such as `import { b } from "moduleB"`, in a source file `/root/src/folder/A.ts`, would result in attempting the following locations for locating "moduleB":

>1. /root/src/folder/moduleB.ts
>2. /root/src/folder/moduleB.d.ts
>3. /root/src/moduleB.ts
>4. /root/src/moduleB.d.ts
>5. /root/moduleB.ts
>6. /root/moduleB.d.ts
>7. /moduleB.ts
>8. /moduleB.d.ts


#### Node
This resolution strategy attempts to mimic the Node.js module resolution mechanism at runtime. 

Relative paths are fairly straightforward. As an example, let’s consider a file located at `/root/src/moduleA.js`, which contains the `import var x = require("./moduleB");` Node.js resolves that import in the following order:

>1. Ask the file named /root/src/moduleB.js, if it exists.
>2. Ask the folder /root/src/moduleB if it contains a file named `package.json` that specifies a "main" module. In our example, if Node.js found the file `/root/src/moduleB/package.json` containing `{ "main": "lib/mainModule.js" }`, then Node.js will refer to `/root/src/moduleB/lib/mainModule.js`.
Ask the folder `/root/src/moduleB` if it contains a file named `index.js`. That file is implicitly considered that folder’s “main” module.

However, resolution for a non-relative module name is performed differently. Node will look for your modules in special folders named node_modules. A node_modules folder can be on the same level as the current file, or higher up in the directory chain. Node will walk up the directory chain, looking through each node_modules until it finds the module you tried to load.

Following up our example above, consider if `/root/src/moduleA.js` instead used a non-relative path and had the `import var x = require("moduleB");`. Node would then try to resolve moduleB to each of the locations until one worked.

>1. /root/src/node_modules/moduleB.js
>2. /root/src/node_modules/moduleB/package.json (if it specifies a "main" property)
>3. /root/src/node_modules/moduleB/index.js

>4. /root/node_modules/moduleB.js
>5. /root/node_modules/moduleB/package.json (if it specifies a "main" property)
>6. /root/node_modules/moduleB/index.js

>7. /node_modules/moduleB.js
>8. /node_modules/moduleB/package.json (if it specifies a "main" property)
>9. /node_modules/moduleB/index.js
Notice that Node.js jumped up a directory in steps (4) and (7).