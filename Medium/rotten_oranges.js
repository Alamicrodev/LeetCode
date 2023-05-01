// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.


// ---------------------- My Solution ----------------------------------

var orangesRotting = function(grid) {
    
    let queue = []
    let freshOranges = 0

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 2) {
                queue.push([r,c])
            }
            if (grid[r][c] == 1) {
                freshOranges++
            }
        }
    }
    
    let minuteCount = 0
    queue.push("pass")
    
    while(queue.length != 0) {
        if (queue[0] == "pass"){
            queue.shift()
            break;
        }
        
        let [r,c] = queue[0]

        if (r > 0 && grid[r-1][c] == 1) {
            grid[r-1][c] = 2
            freshOranges--;
            queue.push([r-1,c])
        }
        if (r < grid.length-1 && grid[r+1][c] == 1) {
            grid[r+1][c] = 2
            freshOranges--;
            queue.push([r+1,c])
        }
        if (c > 0 && grid[r][c-1] == 1) {
            grid[r][c-1] = 2
            freshOranges--;
            queue.push([r,c-1])
        }
        if (c < grid[0].length-1 && grid[r][c+1] == 1) {
            grid[r][c+1] = 2
            freshOranges--;
            queue.push([r,c+1])
        }
         if (queue[1] == "pass") {
              queue.push("pass")
              queue.shift()
              minuteCount++;
         }
      
        queue.shift()
    }


    if (freshOranges > 0) {
        return -1; 
    }

    let result = minuteCount-1>=0? minuteCount-1: 0;
    

     return result;

};