function trimString(str) {
    return str.trim();
}


const str = "   Hello, World!   ";
const trimmedString = trimString(str);
console.log(`Original string: "${str}"`);
console.log(`Trimmed string: "${trimmedString}"`);
