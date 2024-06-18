let array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const newObj = { id: 3, name: 'Charlie' };

array = [...array, newObj];

console.log(array); 