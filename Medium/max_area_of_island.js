// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.


// ---------------------- My Solution ----------------------------------


var maxAreaOfIsland = function(grid) {
    
    max = 0

      
    let islandLength = function(grid, row, column) {
           
           if (row < 0 || row > grid.length-1 || column < 0 || column > grid[0].length-1 ) {
               return 0
           }

           if (grid[row][column] == 0) {
               return 0 
           }
           else {
               grid[row][column] = 0
               return 1 + islandLength(grid, row-1, column) + islandLength(grid, row+1, column) + islandLength(grid, row, column-1) + islandLength(grid, row, column+1)
           }
    }


    for (let i = 0; i<grid.length; i++) {
        for (let k = 0; k<grid[0].length; k++) {
            if (grid[i][k] == 0) {
                continue
            }
            else {
                count = islandLength(grid, i, k) 
                if (count > max) {
                    max = count
                }
            }
        }
    }


    return max  
};