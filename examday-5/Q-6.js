const arr = [6, 3, 8, 5, 2];

function bubbleSort(arr) {
    let n = arr.length;
    let swapCount = 0;  

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapCount++;
            }
        }
    }

    console.log("Sorted Array:", arr);
    console.log("Total number of swaps:", swapCount);
}


bubbleSort(arr);
