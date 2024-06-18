function sortWordsAlphabetically(words) {
    // Use sort() method with a comparison function
    return words.sort(function(a, b) {
        // Convert both words to lowercase to ensure case-insensitive comparison
        const wordA = a.toLowerCase();
        const wordB = b.toLowerCase();

        // Compare words based on Unicode code point values
        if (wordA < wordB) {
            return -1;
        }
        if (wordA > wordB) {
            return 1;
        }
        return 0; 
    });
}


const words = ["Apple", "orange", "banana", "grape", "Cherry"];

const sortedWords = sortWordsAlphabetically(words);
console.log(sortedWords);
