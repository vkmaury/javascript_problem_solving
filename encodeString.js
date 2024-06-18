
function encodeToBase64(input) {
    return btoa(input);
}


const originalString = "Hello, World!";
const base64String = encodeToBase64(originalString);

console.log("Original String:", originalString);
console.log("Base64 Encoded String:", base64String);
