 TypeScript is a strict superset of ECMAScript 2015 (ECMAScript 6 or ES6). This means that all JavaScript code is also TypeScript code,

 In fact, you can convert a JavaScript file to a TypeScript file by simply renaming the extension from .js to .ts.

 However, not all TypeScript code is JavaScript code. This is because TypeScript adds new syntax to JavaScript, which makes the JavaScript easier to read and implements some features, such static typing. Although the TypeScript code makes development easier and less error prone, browsers and most other runtimes don't natively support TypeScript. For this reason, TypeScript requires a build step (transpiler) to transform it to JavaScript for your application to work.
## Compile a TypeScript file
    

1. Create `main.ts`
2. Generate a `tsconfig.json` file with `tsc --init`
3. In the `tsconfig.json` file, look for the target option and change it to `"ES2015"`.
4. Create a new folder `build`
5.In the `tsconfig.json` file, look for the `outDir` option, remove the comment, and set the parameter to `./build`.
6. enter `tsc` to compilation
7. Run the `node ./build/main.js` to display the result  

### Types in TypeScript

The main benefit of Typescript is that it enables you to add static types to your JavaScript code. Types place static constraints on program entities, such as functions, variables, and properties, so that compilers and development tools can offer better verification and assistance during development.

The TypeScript type analysis occurs entirely at compile-time and adds no run-time overhead to program execution.

### Declaring let and const variables

As a reminder, the difference between them is that let declarations can be done without initialization, whereas const declarations are always initialized with a value. And const declarations, once assigned, can never be reassigned.


### Any type

All types in TypeScript are subtypes of a single top type called the any type. The any type is the one type that can represent any JavaScript value with no constraints. All other types are categorized as primitive types, object types, or type parameters. 

* Primitive types
  * The primitive types are the `boolean`, `number`, `string`, `void`, `null`, and `undefined` types along with user-defined enumeration or `enum` types.

* `void` type exists purely to indicate the absence of a value, such as in a function with no return value. The `null` and `undefined` types are subtypes of all other types. It is not possible to explicitly.

## The enum type

Enumerations (enum) are treated as data types, and you can use them to create sets of constants for use with variables and properties.

## Any type

The any type is the one type that can represent any JavaScript value with no constraints. This can be useful when you're expecting a value from a third-party library or user inputs where the value is dynamic because the any type will allow you to reassign different types of values. And, as mentioned earlier, using the any type allows you to gradually migrate your JavaScript code to use static types in TypeScript.

Because randomValue is registered as any, all of the following examples are valid TypeScript and will not generate a compile-time error.


## Unknown type

The unknown type is similar to the any type in that any value is assignable to type unknown. However, you can't access any properties of an unknown type, nor can you call or construct them.


## Type assertion

It tells the compiler "trust me, I know what I’m doing".  It is used purely by the compiler.

## Type guards

Type guard is the use of the typeof and id to examine the type of an expression at runtime

string	typeof s === "string"
number	typeof n === "number"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)
