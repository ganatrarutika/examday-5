
let arr = [10, 20, 30, 40];

function insertFifty(arr) {
    
    if (arr.length < 5) {
        arr.push(50);
    }
    return arr;
}

console.log(insertFifty(arr));  
