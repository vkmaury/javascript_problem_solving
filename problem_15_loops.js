const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

for (let key in person) {
    if (person.hasOwnProperty(key)) { 
        console.log(`${key}: ${person[key]}`);
    }
}
