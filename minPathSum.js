//Given a m x n grid filled with non-negative numbers, 
//find a path from top left to bottom right, 
//which minimizes the sum of all numbers along its path.

const minPathSum = (grid) => {
    const n = grid.length
    const m = grid[0].length
    for (let i=1; i<n; i++){
        grid[i][0] += grid[i-1][0]
    }
    for(let j=1; j<m; j++) {
        grid[0][j] += grid[0][j-1];
    }
    for(let i=1; i<n; i++) {
        for(let j=1; j<m; j++) {
			// The distance to the grid at i,j is equal to itself plus the minimum
			// of the two grid spaces (one above, one to the left)
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    return grid[n-1][m-1];
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))