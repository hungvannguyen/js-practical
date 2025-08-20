function multi(... num){
    return num.reduce((acc, curr) => acc * curr, 1);
}


console.log(multi(1, 2, 3, 4));