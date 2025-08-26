const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};


const jsonString = JSON.stringify(car);
console.log(jsonString); // '{"brand":"Toyota","model":"Camry","year":2020}'
console.log(typeof jsonString); // "string"

const parsedCar = JSON.parse(jsonString);
console.log(parsedCar);
// check type
console.log(typeof parsedCar); // "object"