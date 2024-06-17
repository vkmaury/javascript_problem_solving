function decimalToBinary(decimal) {
    if (decimal === 0) {
        return '0';
    }

    let binary = '';
    let num = decimal;

    while (num > 0) {
        binary = (num % 2) + binary; // Prepend remainder to binary string
        num = Math.floor(num / 2);   // Update number by integer division
    }

    return binary;
}

// Example usage:
const decimalNumber = 23;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`Decimal ${decimalNumber} is ${binaryNumber} in binary.`);
