// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

// ---------------------- My Solution ----------------------------------
// this is a greedy O(n) reverse solution. 
// Where we move the goal post, each time a point can reach the goal post we make it the goalpost. 
// starting from the end, and if in the end the goalpost is at index 0 it means that the function returns true.

var canJump = function(nums) {
    let goal = nums.length-1

    for(let i = nums.length-2; i>=0; i--) {
        if (i+nums[i] >= goal) {
            goal = i
        }
    }

    if (goal == 0) {
        return true 
    }
    else {
        return false
    }

};