// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// ---------------------- My Solution ----------------------------------
 
var threeSum = function(nums) {

    let sortedArray = nums.sort((a,z) => a-z)

    let solutions = new Set()

    for (let i = 0; i < sortedArray.length-2; i++) {
        if (i == 0 || (i > 0 && sortedArray[i] != sortedArray[i-1])) 
        {
        let target = 0 - sortedArray[i]
        let startPointer = i+1
        let endPointer = sortedArray.length-1
        
        while(startPointer < endPointer) {
            let sum = sortedArray[startPointer] + sortedArray[endPointer]

            if (sum == target) {
                solutions.add([sortedArray[i], sortedArray[startPointer], sortedArray[endPointer]]) 
                while (startPointer < endPointer && sortedArray[startPointer] == sortedArray[startPointer+1]) startPointer++; 
                while (startPointer < endPointer && sortedArray[endPointer] == sortedArray[endPointer-1]) endPointer--; 

                startPointer++;
                endPointer--; 
            }
            else if (sum < target) {
                startPointer++; 
            }
            else if (sum > target) {
                endPointer--;
            }

        }         

        }
    }

   let solutionsArray = Array.from(solutions)


   return solutionsArray
};