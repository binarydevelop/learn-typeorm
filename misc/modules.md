## Modules
--- 
- Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.

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