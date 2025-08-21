const car = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020
};

const carCopy = { ...car };
carCopy.name = 'Honda';
carCopy.model = 'Accord';
carCopy.year = 2021;

console.log('Original Car: ' + car.name + ' ' + car.model + ' ' + car.year);
console.log('Copied Car: ' + carCopy.name + ' ' + carCopy.model + ' ' + carCopy.year);
