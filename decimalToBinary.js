function decimalToBinary(decimal) {
    if (decimal === 0) {
        return '0';
    }

    let binary = '';
    let num = decimal;

    while (num > 0) {
        binary = (num % 2) + binary; 
        num = Math.floor(num / 2);   
    }

    return binary;
}


const decimalNumber = 2;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`Decimal ${decimalNumber} is ${binaryNumber} in binary.`);
