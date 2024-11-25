let arr = [1, 3, 5, 3, 7, 9];

function removeFirstOccurrence(arr, num) {
    const index = arr.indexOf(num);
  
    if (index !== -1) {
        arr.splice(index, 1); 
    }
    
    return arr;
}
console.log(removeFirstOccurrence(arr, 3));  


