// Function to count the number of vowels in a string
function countVowels(str) {
    
    const vowels = "aeiouAEIOU";
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}


const exampleString = "Hello, World!";
const numberOfVowels = countVowels(exampleString);

console.log("Number of vowels:", numberOfVowels); // Output: Number of vowels: 3 (e, o, o)
