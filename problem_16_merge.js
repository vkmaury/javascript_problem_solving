const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }