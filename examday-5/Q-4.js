let numbers = [7, 3, 7, 8, 2, 7, 4];

function countSevens(arr) {
    return arr.filter(num => num === 7).length;
}

console.log(countSevens(numbers));  
