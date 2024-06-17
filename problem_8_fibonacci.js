function fibonacciSequence(count) {
    // Initialize variables for the first two Fibonacci numbers
    let a = 0, b = 1;

    // Edge case for count = 0
    if (count === 0) {
        console.log("Fibonacci sequence with 0 numbers:");
        return;
    }

    // Print the first 'count' Fibonacci numbers
    console.log(`Fibonacci sequence with ${count} numbers:`);
    console.log(a); // Print first number

    for (let i = 2; i <= count; i++) {
        console.log(b); // Print current Fibonacci number
        let next = a + b;
        a = b;
        b = next;
    }
}

// Example usage:
const numberOfTerms = 10; // Change this number to get different counts
fibonacciSequence(numberOfTerms);
