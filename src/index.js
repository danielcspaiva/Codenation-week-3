'use strict'

const fibonacci = () => {
    let arr = [0, 1];
    let x = 1;
    let count = 2;
    
    while (x < 350) {
        x = arr[count - 2] + arr[count - 1];
        arr.push(x);
        count += 1;
    }
    arr.pop();
    return arr;
}




const isFibonnaci = (num) => {
    return fibonacci().includes(num)
}


module.exports = {
    fibonacci,
    isFibonnaci
}
