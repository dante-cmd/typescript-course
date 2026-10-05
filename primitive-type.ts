
// ------Primitive types in TypeScript --------

// Boolean type

let flag:boolean;
let yes=true;
let no=false;

// As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating-point numbers get the type number, while BigIntegers get the type bigint.

let a: number;
let b = 0;
let c: number = 123.456;
let big: bigint = 100n;

// String

let s: string;
let empty = "";
let abc = 'abc';

// we can also use template strings, which can span multiple lines and have embedded expressions.

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);