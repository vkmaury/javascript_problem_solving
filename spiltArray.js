function chunkArray(array, chunkSize) {
   
    let chunks = [];

    
    for (let i = 0; i < array.length; i += chunkSize) {
        
        let chunk = array.slice(i, i + chunkSize);
       
        chunks.push(chunk);
    }

    return chunks;
}


const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;

const result = chunkArray(originalArray, chunkSize);
console.log(result);
