# learn-typeorm
 ## Typescript
 ![Typescript](/ts.jpg)
 **Typescript**  is a *superset* of Javascript. A language building up on Javascript.
### About Typescript:
 - Adds new Features & advantages to Javascript.
 - Browser can't execute it.
 - Typescript is a powerful compiler which is used to compile your `ts` code to `js` code.
 - Features are compiled to Js workarounds.
 - It also adds `type` which results in less error prone code.

 #### Install Typescript
 ``` typescript
 npm i -g typescript
 ```

 - ### How to run ts code?
 > Example 1 : add.ts 
 > To run this `node app.js` 
 ``` typescript
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    console.log(add(2,3));
 ```
 > Example 2 : add.ts
 > To run this `ts-node app.ts`
 ``` typescript
      function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    console.log(add(2,3));
 ```
 #### This will create a **js** compiled file called `add.js`, which can be executed using `node add.js`
 ---
 ## Typeorm
 ![Typeorm](/typeorm.png)
 ### About Typeorm
 TypeORM is an ORM that can run in NodeJS and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8).  
TypeORM supports both Active Record and Data Mapper patterns, unlike all other JavaScript ORMs currently in existence, which means you can write high quality, loosely coupled, scalable, maintainable applications the most productive way.

#### Install Typeorm
``` typescript
npm install typeorm --save
```
> Install Database Driver 
 ``` bash
  npm install pg
  ```
