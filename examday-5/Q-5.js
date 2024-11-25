let arr = [10, 15, 20, 25, 30];

function modifyArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr[i] = arr[i] * 2;
        } else {
            arr[i] = arr[i] / 2;
        }
    }
    return arr;
}

console.log(modifyArray(arr));  
