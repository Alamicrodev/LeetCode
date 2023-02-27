// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

// ---------------------- My Solution ----------------------------------

var searchMatrix = function(matrix, target) {
    if (matrix.length == 1) {
          let intArray = matrix[0]
          if (intArray.length == 0) {
              return false 
          } 
          
          let centre = Math.floor((intArray.length-1)/2)
          if (intArray[centre] == target) {
              return true 
          }
          else if (intArray[centre] > target) {
             return searchMatrix([intArray.slice(0,centre)], target) 
          }
          else if (intArray[centre] < target) {
              return searchMatrix([intArray.slice(centre+1, intArray.length)], target)
          }
          else return false 

    }
    else {
        for (let i = 0; i<matrix.length; i++) {
            if (target <= matrix[i][matrix[i].length-1]) {
               return searchMatrix([matrix[i]], target)
               
            }
        }
    }
    return false 
};