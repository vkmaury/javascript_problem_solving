function isArmstrongNumber(number) {
    const numStr = number.toString();
    const n = numStr.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += Math.pow(parseInt(numStr.charAt(i)), n);
    }

    return sum === number;
}


const num1 = 153;
console.log(`${num1} is Armstrong number: ${isArmstrongNumber(num1)}`); 

const num2 = 371;
console.log(`${num2} is Armstrong number: ${isArmstrongNumber(num2)}`); 

const num3 = 123;
console.log(`${num3} is Armstrong number: ${isArmstrongNumber(num3)}`); 
