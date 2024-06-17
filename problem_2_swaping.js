let a = 5;
let b = 10;

console.log(`Before swap: a = ${a}, b = ${b}`);

// Using array destructuring
[a, b] = [b, a];

console.log(`After swap: a = ${a}, b = ${b}`);
