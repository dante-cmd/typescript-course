const addNumber = (x:number, y:number) => x + y

console.log(addNumber(10, 6))


// ----- Types --------

let x:number;
x = 50; // All right
// x = "five" It wrong
let y=10; // infer number type for y
y = 10; //All right
// y = "us" // it's wrong
let z; // Any
z=0;
z=true;





