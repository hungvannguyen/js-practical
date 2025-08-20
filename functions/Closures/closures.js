function exampleFunction(){
    let count = 0;
    return function() {
        count++;
    }
}

const count = exampleFunction();

console.log(count());
console.log(count());