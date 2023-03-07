// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.


// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// ---------------------- My Solution ----------------------------------

var fourSum = function(nums, target) {
    
    let sortedNums = nums.sort((a,z) => a-z)
    let quad = []
    let ans = []

    let helper = function(k, start, target) {
           if (k != 2) {
            for (let i = start; i < sortedNums.length - k + 1; i++) {
                if (i > start && sortedNums[i] == sortedNums[i-1]) continue
                quad.push(sortedNums[i])
                helper(k-1, i+1, target-sortedNums[i])
                quad.pop()

            }
             return
           }
           else 
           {
               startPoint = start
               endPoint = sortedNums.length-1

               while(startPoint < endPoint) {
                   let sum = sortedNums[startPoint] + sortedNums[endPoint]

                   if (sum == target) {
                       
                       ans.push(quad.concat([sortedNums[startPoint], sortedNums[endPoint]]))
                    
                       startPoint++
                       while (startPoint < endPoint && sortedNums[startPoint] == sortedNums[startPoint-1]) startPoint++;
                   }

                  else if (sum < target) {
                      startPoint++; 
                  }
                  else if (sum > target) {
                      endPoint--; 
                  }

               }

           }
    }
    
    helper(4, 0, target)


   return ans

};
 