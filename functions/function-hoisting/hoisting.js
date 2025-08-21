// Hoisting example with no error

console.log(a);

let a;

console.log(a);

a = 10;

// Hoisting example with Function Declaration

helloWorld();

function helloWorld(){
    console.log('Hello, World!');
}

// Hoisting with Function Expression

let hello = function(){
    console.log('Hello, World!');
}