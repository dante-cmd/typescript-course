// ----- Any  ----

let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

// Because randomValue is registered as any, all of the following examples are valid TypeScript and will not generate a compile-time error. 
// Those errors will appear when we run node ./build/any-unknow-type.js, not in the compilation process

// console.log(randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// Change to unknown

let ax:unknown = 50;
ax = false;
ax="wonder";

// In this case, in the compilation process the errors will apperar.
// console.log(ax.name)
// ax()
// ax.toUpperCase()


// ---------- Type assertion ---------------

typeof ax === "string"
? console.log((ax as string).toLocaleUpperCase())
: console.log("I hope a string")

// ----- Type guards -----------
//  type guard is the use of the typeof and id to examine the type of an expression at runtime