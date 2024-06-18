const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

// Merge arrays and remove duplicates
const mergedArray = [...new Set(array1.concat(array2))];

console.log(mergedArray); 
