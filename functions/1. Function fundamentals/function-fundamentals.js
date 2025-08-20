function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(operation, a, b) {
    return operation(a, b);
}

console.log(calculate(sum, 5, 3));
console.log(calculate(multiply, 5, 3));