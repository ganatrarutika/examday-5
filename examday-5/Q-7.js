const grid = [
    [1, 2, 3],  
    [4, 5, 6],  
    [7, 8, 9]   
];

function diagonalSum(grid) {
    let sum = 0;
    
    for (let i = 0; i < grid.length; i++) {
        sum += grid[i][i]; 
    }
    
    return sum;
}

console.log(diagonalSum(grid));  