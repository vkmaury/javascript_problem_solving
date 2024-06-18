// Function to count the number of keys/properties in an object
function countKeys(obj) {
    return Object.keys(obj).length;
}

// Example usage
const exampleObject = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer"
};

const numberOfKeys = countKeys(exampleObject);

console.log("Number of keys/properties:", numberOfKeys); 
