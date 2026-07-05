// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
// ---------------------- My Solution (O(n)) ----------------------------------
// solves in O(n) time 

function  productExceptSelf(nums: number[]): number[] {
        
        const prefix : number[] = []   //each element is the product of all previous elements from left
        const postfix : number[] = []  //each element is the product of all elements from the right.
 
        for (let i = 0; i < nums.length; i++) {
             if (i == 0) 
             {
                prefix[i] = nums[i]
             }
             else {
                prefix[i] = nums[i]*prefix[i-1];
             }
        }
        
        for (let i = nums.length-1; i >= 0; i--) {
            if (i == nums.length-1) { postfix[i] = nums[i]}
            else {postfix[i] = postfix[i+1]*nums[i]}
        }

        let resultArray : number[] = []    //each element is the product of the left element at prefix array and right element at postfix array.  

        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                resultArray[i] = postfix[i+1]
            } 
            else if (i == nums.length-1) {
                resultArray[i] = prefix[i-1]
            }
            else {
                resultArray[i] = prefix[i-1]*postfix[i+1];
            }
        }

        return resultArray
    }