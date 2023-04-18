// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// ---------------------- My Solution (O(n^2)) ----------------------------------
// this is basically bubble sort

var sortedSquares = function(nums) {
    
    let squaredNums = []
    for (let i = 0; i<nums.length; i++) {
        if (squaredNums.length == 0) {
            squaredNums.push(nums[i]**2)
        }
        else {
            for (let k = 0; k < squaredNums.length; k++) {
                if (squaredNums[k] > nums[i]**2) {
                    squaredNums.splice(k,0,nums[i]**2)
                    break;
                }
                else {
                  if (k == squaredNums.length-1){
                      squaredNums.push(nums[i]**2)
                      break;
                  }
                }
            }
            
        }
    }

    return squaredNums

};

