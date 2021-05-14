### package.json 
---
#### Contents
1. [Introduction](#Introduction)

---
### Introduction
When we intialize a new node project and do `npm init ` we get several options to fill to build package.json
To read about all the available [options](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
Some common options are :
``` json
{
   "name": "learn-typeorm",
   "version": "1.0.0",
   "description": "describe your project",
   "main": "app.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "ts-node src/app.ts",
      "start:dev": "tsc && node ./build/app.js" 
   },
   "repository": {
      "type": "git",
      "url": "git@github.com-binarydevelop:binarydevelop/learn-typeorm.git"
   },
   "author": "Tushar Roy",
   "license": "ISC",
   "devDependencies": {
      "@types/node": "^8.0.29",
      "ts-node": "3.3.0",
      "typescript": "3.3.3333"
   },
   "dependencies": {
      "express": "^4.17.1",
      "mysql": "^2.14.1",
      "reflect-metadata": "^0.1.10",
      "typeorm": "0.2.32"
   }
}
```

option                              | description
-----------------------------------   ---------------
name                                | Project Name
version                             | The current version of the project
description                         | Description of the project
main                                | Entry File
scripts                             | Scripts to automate the proccesses.
repository                          | Information about git repository
author                              | Name of the author
license                             | License 
dependencies                        | packages which are required for the app to run
devDependencies                     | packages which are required only during development Example: nodemon



`ts-node src/app.ts` will just compile the code and show the result.
To build the dist folder you need to add a script like :
``` "start:dev": "tsc && node ./build/app.js" ```