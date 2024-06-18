function kilometersToMiles(kilometers) {
    const miles = kilometers * 0.621371;
    return miles;
}


const kilometers = 5;
const miles = kilometersToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
