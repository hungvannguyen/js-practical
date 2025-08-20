// Pure function example
function sum(a, b) {
    return a + b;
}

// Impure function example
let c = 0;
function increment() {
    c++;
    return c;
}

console.log(sum(2, 3));
console.log(increment());
console.log(increment());