// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
 

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 
// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// ---------------------- My Solution ----------------------------------

var longestConsecutive = function(nums) {
    
    let numbersSet = new Set(nums)
    let maxConsecutive = 0 

    for (let i =0; i< nums.length; i++) {
        let cCons = 1
        let cNum = nums[i] 
        if (numbersSet.has(cNum-1)){
            continue; 
        }
        while (numbersSet.has(cNum+1)){
            cCons++; 
            cNum++; 
        }
        if (cCons > maxConsecutive) {
            maxConsecutive = cCons; 
        }
    }
    
    return maxConsecutive  


};