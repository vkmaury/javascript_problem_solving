function removeWhitespace(text) {
    return text.replace(/\s+/g, '');
}


const originalText = "   Hello,\n\t World!   ";
const textWithoutWhitespace = removeWhitespace(originalText);
console.log(`Original text: "${originalText}"`);
console.log(`Text without whitespace: "${textWithoutWhitespace}"`);
