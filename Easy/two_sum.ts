// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// ---------------------- My Solution O(n) ----------------------------------
// Use a hashmap to store the requiredAtIndex where required value is the key, and the index is the value. 
// later if we find that value, we simply use hashMap to get index where it is required, and we combine indexes to get the answer.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
         
         const requiredAtIndex : {[ key : number] : number} = {}
          
          for (let i = 0; i < nums.length; i++) {
              if (requiredAtIndex[nums[i]] != undefined && requiredAtIndex[nums[i]] !== i) {  //requiredAtIndex[nums[i]]  can also be 0, making the statement false
                return [requiredAtIndex[nums[i]], i]
              }
              else {
                  let required = target - nums[i] 
                  requiredAtIndex[required] = i;
              }
          }

          return []
    }
}
