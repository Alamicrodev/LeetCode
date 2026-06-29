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

function hasDuplicate(nums: number[]): boolean {
        
        const numCount : {[key: number]: number} = {}

        for (let i of nums) {
            if (numCount[i])  
                  {return true } 
            else {
                numCount[i] = 1  
            } 
        }
              
        return false 
    }


// ---------------------- My Solution (improved) ----------------------------------
// uses Hash set
const hasDuplicateImproved = function(nums : number[]): boolean {
      
     const numSet : Set<number> = new Set()

     for (let i = 0; i < nums.length; i++) {
           if (numSet.has(nums[i])) {
                return true
           }
           else {
               numSet.add(nums[i])
           }
     }
 
    return false 
}

