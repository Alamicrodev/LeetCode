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
// sort the nums array. 
// loop through each element using i. Make sure no element is repeated by checking if nums[i] == nums[i-1], if so we continue to next i; 
// then use two pointer to find the req value, and push in array all three values when you find. 
// after pushing k++;, and keep k++ until nums[k] != nums[k-1];  this makes sure that the 2nd element is never repeated. 
  





function threeSum(nums: number[]): number[][]
    {
       
       //sort the array
       nums.sort((a,z) => a-z); 
       let resultArray : number[][] = [];

       for (let i = 0; i < nums.length; i++) {
           if (i != 0 && nums[i] === nums[i-1]) {
              continue; 
              }
           let req = -nums[i]
           let k = i+1; 
           let j = nums.length-1; 

           while (k < j) {
              if (nums[k] + nums[j] > req)  {
                 j--;
                 continue;
              }
              else if (nums[k] + nums[j] < req) {
                 k++; 
                 continue;
              }
              else {
                  resultArray.push([nums[i], nums[k], nums[j]])
                  k++;
                  while (k < j && nums[k] == nums[k-1]) k++;
                  continue;
              }
           }
       }
        
        return resultArray
    }