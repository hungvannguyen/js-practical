 
function exampleFunction(){
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter = exampleFunction();

console.log(counter());
console.log(counter());