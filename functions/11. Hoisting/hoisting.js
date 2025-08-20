// Hoisting example with no error

console.log(a);

let a;

console.log(a);

a = 10;


// Hoisting example with error

console.log(b);

let b = 20;

// Hoisting example with Function Declaration

helloWorld();

function helloWorld(){
    console.log('Hello, World!');
}

// Hoisting with Function Expression

helloWorld();

let helloWorld = function(){
    console.log('Hello, World!');
}