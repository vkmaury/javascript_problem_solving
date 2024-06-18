function getFileExtension(filename) {
    // Split the filename by '.'
    const parts = filename.split('.');
    
    // Get the last part of the array which is the extension
    return parts[parts.length - 1];
}


const filename1 = 'example.txt';
const filename2 = 'image.jpg';
const filename3 = 'script.js';

console.log(`File extension of "${filename1}":`, getFileExtension(filename1)); 
console.log(`File extension of "${filename2}":`, getFileExtension(filename2)); 
console.log(`File extension of "${filename3}":`, getFileExtension(filename3)); 
