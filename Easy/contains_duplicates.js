// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// ---------------------- My Solution ----------------------------------
// uses hash map

var containsDuplicate = function(nums) {
    let numsCounter = {}
    for (let x = 0; x <= nums.length; x++) {
        if (!numsCounter[nums[x]]){
            numsCounter[nums[x]] = 1
        } 
        else {
            return true 
        }
    }
    return false
};

// ---------------------- My Solution (improved) ----------------------------------
// uses hashset
// the js built in set is a hashset and not just an ordinary set. 

var containsDuplicate = function(nums) {
    let numsSet = new Set()
    for (let x = 0; x <= nums.length; x++) {
        if (!numsSet.has(nums[x])){
            numsSet.add(nums[x])
        } 
        else {
            return true 
        }
    }
    return false
};