"use strict";
// ------Primitive types in TypeScript --------
// Boolean type
let flag;
let yes = true;
let no = false;
// As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating-point numbers get the type number, while BigIntegers get the type bigint.
let a;
let b = 0;
let c = 123.456;
let big = 100n;
// String
let s;
let empty = "";
let abc = 'abc';
// we can also use template strings, which can span multiple lines and have embedded expressions.
let firstName = "Mateo";
let sentence = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);
