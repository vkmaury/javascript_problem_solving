const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};


if ('firstName' in person) {
    console.log('firstName exists in person object.');
} else {
    console.log('firstName does not exist in person object.');
}


if ('gender' in person) {
    console.log('gender exists in person object.');
} else {
    console.log('gender does not exist in person object.');
}
