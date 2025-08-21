const car = {
    name: 'Toyota',
    model: 'Camry',
    year: 2020,
    displayInfo: function () {
        console.log('Car Info: ' + this.name + ' ' + this.model + ' ' + this.year);
    }
};
car.displayInfo();

