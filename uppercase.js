function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}


const originalString = "hello, world!";
const capitalizedString = capitalizeFirstLetter(originalString);
console.log(capitalizedString); 
