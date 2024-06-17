const prompt = require('prompt-sync')({ sigint: true });

// Get coefficients a, b, and c from the user
const a = parseFloat(prompt('Enter the coefficient a: '));
const b = parseFloat(prompt('Enter the coefficient b: '));
const c = parseFloat(prompt('Enter the coefficient c: '));

// Calculate the discriminant
const discriminant = b * b - 4 * a * c;

if (a === 0) {
    console.log('The coefficient a cannot be 0 in a quadratic equation.');
} else if (discriminant > 0) {
    // Two distinct real roots
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`The roots are real and different.`);
    console.log(`Root 1: ${root1}`);
    console.log(`Root 2: ${root2}`);
} else if (discriminant === 0) {
    // One real root (repeated root)
    const root = -b / (2 * a);
    console.log(`The root is real and repeated.`);
    console.log(`Root: ${root}`);
} else {
    // Two complex roots
    const realPart = -b / (2 * a);
    const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    console.log(`The roots are complex and different.`);
    console.log(`Root 1: ${realPart} + ${imaginaryPart}i`);
    console.log(`Root 2: ${realPart} - ${imaginaryPart}i`);
}
