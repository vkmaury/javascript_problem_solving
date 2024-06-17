function fibonacciSequence(count) {
    
    let a = 0, b = 1;

    
    if (count === 0) {
        console.log("Fibonacci sequence with 0 numbers:");
        return;
    }

    
    console.log(`Fibonacci sequence with ${count} numbers:`);
    console.log(a); 

    for (let i = 2; i <= count; i++) {
        console.log(b); 
        let next = a + b;
        a = b;
        b = next;
    }
}

// Example usage:
const numberOfTerms = 10; // Change this number to get different counts
fibonacciSequence(numberOfTerms);
