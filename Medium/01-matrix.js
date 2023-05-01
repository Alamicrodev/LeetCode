// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.


// Example 1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2:
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]
 
// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.


// ---------------------- My Solution ----------------------------------
// its a form of breadth first search where we keep track of the coordinates visited. 

var updateMatrix = function(mat) {
    
    let resultMatrix = [[]]
    let queue = []


//push 0 in result matrix where it is 0 and push -1 where it is not to remember that it is not visited.
//also add the coordinates of visited ones in queue.
    for (let r = 0; r< mat.length; r++) {
        resultMatrix[r] = []
        for (let c=0; c<mat[0].length; c++) {
            if (mat[r][c] == 0){
                resultMatrix[r][c] = 0
                queue.push([r,c])
            } 
            else 
            {
               resultMatrix[r][c] = -1
            }
        }
    }
    
// go to each visited coordinate and check its neighbor
// if the neighbor is not visited, we repalace its value with 1+value on current coordinate
// we also add the new visited coordinate in the queue and in the end remove the current head of queue which was just visited. 
    while(queue.length > 0) {
        let [r,c] = queue[0]
        
        if (r > 0 && resultMatrix[r-1][c] == -1) {
            resultMatrix[r-1][c] = resultMatrix[r][c]+1
            queue.push([r-1,c])
        }

        if (r < resultMatrix.length-1 && resultMatrix[r+1][c] == -1) {
            resultMatrix[r+1][c] = resultMatrix[r][c]+1
            queue.push([r+1,c])
        }
        
        if (c > 0 && resultMatrix[r][c-1] == -1) {
            resultMatrix[r][c-1] = resultMatrix[r][c]+1
            queue.push([r,c-1])
        }
        
        if (c < resultMatrix[0].length && resultMatrix[r][c+1] == -1) {
            resultMatrix[r][c+1] = resultMatrix[r][c]+1
            queue.push([r,c+1])
        }
         queue.shift()
    }

   return resultMatrix
};
