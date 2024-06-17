function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}


const celsius = 30;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit.toFixed(2)} degrees Fahrenheit.`);
