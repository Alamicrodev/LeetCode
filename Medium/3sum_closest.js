// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// ---------------------- My Solution ----------------------------------
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,z) => a-z)
    
    let diff = Number.MAX_SAFE_INTEGER
    let closestSum = 0
    for (let i = 0; i< nums.length; i++) {
        let start = nums[i]
        let pointerS = i+1
        let pointerE = nums.length-1
        while(pointerS < pointerE) {
            if (start + nums[pointerS] + nums[pointerE] == target) {
                return target
            }
            if (Math.abs(start + nums[pointerS] + nums[pointerE] - target ) < diff)
            {
                diff = Math.abs(start + nums[pointerS] + nums[pointerE] - target)
                closestSum = start + nums[pointerS] + nums[pointerE]
            }

            if ( start + nums[pointerS] + nums[pointerE] > target) {
                pointerE--;
            }
            else {
                pointerS++;
            }
             
        }
    }
    return closestSum
};
