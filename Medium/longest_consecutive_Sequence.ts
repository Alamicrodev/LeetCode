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
// Convert into a set > check each value -1 in set > if yes (ignore) > if no (great) > We start +1 and check in set to keep incrementing the seq length > In the end return max sequence length
// Almost O(n) solution 


function longestConsecutive(nums: number[]): number {
         
        if (nums.length == 0) {
            return 0;
        }


        const numsSet : Set<number> = new Set(nums); 
        let maxSeq = 1; 
       
        for (let i = 0; i< nums.length; i++) {
              
              if (numsSet.has(nums[i]-1)) {
                continue 
              }
              else {
                  let seqLen = 1; 
                  let itter = nums[i]

                  while (numsSet.has(itter+1)) {
                       seqLen++; 
                       itter++; 
                  }   

                  if (seqLen > maxSeq) {
                      maxSeq = seqLen
                  }
              }
        }

        return maxSeq
    } 