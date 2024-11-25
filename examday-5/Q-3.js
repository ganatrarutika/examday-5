let nums = [2, 5, 8, 11, 14];

function updateEvenSquares(nums) {
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 === 0) {
            nums[i] = nums[i] * nums[i];
        }
    }
    return nums;
}

console.log(updateEvenSquares(nums));  
