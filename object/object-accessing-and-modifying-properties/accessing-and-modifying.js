const car = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020
};

console.log('Car before modification: ' + car.name + ' ' + car.model + ' ' + car.year);


car.name = 'Honda';
car.model = 'Accord';
car.year = 2021;

console.log('Car after modification: ' + car.name + ' ' + car.model + ' ' + car.year);
