## Modules
---
### Contents
1. [Introduction](#Introduction)
2. [Working of Module](#working)
3. [Export](#Export)
    - [Exporting a Declaration](#Exporting)
    - [Export Statements](#statements)
    - [Re-Exports](#Re-Exports)
4. [Import](#Import)
    - [Import a single export from a module](#single)
    - [Import the entire module into a single variable, and use it to access the module exports](#entire)
    - [Default exports](#Default)
    -[High Level Libraries](#High)

---
#### Introduction 
Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.

### Working of Module
Variables functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

Modules are declarative; the relationships between modules are specified in terms of imports and exports at the file level.

#### Export 
 ###### Exporting a declaration
Any declaration (such as a variable, function, class, type alias, or interface) can be exported by adding the `export` keyword.

``` typescript
// StringValidator.ts

export interface StringValidator {
  isAcceptable(s: string): boolean;
}
```
``` typescript
// ZipCodeValidator.ts

import { StringValidator } from "./StringValidator";
export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

###### Export statements
Export statements are handy when exports need to be renamed for consumers, so the above example can be written as:
``` ts
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
```

###### Re-Exports 
``` ts
// Export original validator but rename it
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";
```

#### Import
Importing is just about as easy as exporting from a module. Importing an exported declaration is done through using one of the import forms below:

###### Import a single export from a module
``` ts
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();

//imports can also be renamed
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();

```

###### Import the entire module into a single variable, and use it to access the module exports
``` ts
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
```

#### Default exports
Default exports are useful to export only a single object, function, variable. During the import, we can use any name to import.
``` ts
// file module.js
var x=4;
export default x;

// test.js
// while importing x in test.js
import y from './module';
// note that y is used import x instead of
// import x, because x was default export
console.log(y);		
// output will be 4

```


#### - High Level Libraries
1. ES5 - Core definitions for all ES3 and ES5 functionality
2. ES2015 - Additional APIs available in ES2015 (also known as ES6) - array.find, Promise, Proxy, Symbol, Map, Set, Reflect, etc. (ES6)
3. ES2016 - Additional APIs available in ES2016 - array.include, etc. (ES7)
4. ES2017 - 	Additional APIs available in ES2017 - Object.entries, Object.values, Atomics, SharedArrayBuffer, date.formatToParts, typed arrays, etc.
5. ES2018 - Additional APIs available in ES2018 - async iterables, promise.finally, Intl.PluralRules, rexexp.groups, etc.
6. ES2019 - Additional APIs available in ES2019 - array.flat, array.flatMap, Object.fromEntries, string.trimStart, string.trimEnd, etc.
7. ES2020 - Additional APIs available in ES2020 - string.matchAll, etc.
8. ESNext - Additional APIs available in ESNext - This changes as the JavaScript specification evolves