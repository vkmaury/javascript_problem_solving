function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
const randomInt = getRandomInteger(min, max);
console.log(`Random integer between ${min} and ${max}: ${randomInt}`);
