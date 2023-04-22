// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 
// ---------------------- My Solution O(n) ----------------------------------

var rotate = function(nums, k) {
    
    let newNums = []

    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length-1-k) {
            newNums[i+k] = nums[i]
        }
        else {
            let p = (i+k)%nums.length
            newNums[p] = nums[i]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = newNums[i]
    }
   
    
};

// ---------------------- My Solution Better ----------------------------------


var rotate = function(nums, k) {
    // if the length of k is greater then the length of the array itself we simply 
    // modulus it until it gets under the array length it won't affect the end result.
    if (k > nums.length){
        k = k % nums.length;
    } 
    
    // a function that simply takes indexes and array and reverse the the elements between 
    // those indexes. 
    function reverse(start, end, array) {
        while (start < end) {
            if (start > end || start == end) {
                break;
            }
              [array[start], array[end]] = [array[end], array[start]]
              start++;
              end--;
        }
    }

    // now simply reversing the array completely and then reversing the two parts.
    reverse(0, nums.length-1, nums)
    reverse(0, k-1, nums)
    reverse(k, nums.length-1, nums)

};