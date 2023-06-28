// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9
 
// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// ---------------------- My Solution ----------------------------------

var trap = function(height) {
   
    // for every single point (i) we are only trying to find how many units
    // of water can be stored in that point only, we do not look for any container. 
    // this can be calulated by min(maxL, maxR) - height[i] 
    // basically for every i we are looking for max height on the left 
    // and max height on right and then subtract the height of i 
    // from the smaller one amongst the two. 
    // we calculate that for every i and add it to the quantity. 

    // you can solve it by creating an array of maximum from left at each point.
    // and another array for maximum from right at each point.
    // then 3rd array keeping the minimum of the two at that point. 
    // and then for each point subtract its height from the minimum and boom you got your answer. 
    
    // but here I am using another method to use constant memory. 
    // basically between left and right pointer if you only move the one 
    // which has the smaller maxheight on its side, you can always be sure that it is the minimum 
    // of the two sides maxes. so you don't even need to know the max on the other side. 
 
    let leftPointer = 0
    let rightPointer = height.length-1;
    let leftMax = 0
    let rightMax = 0 
    let quantity = 0
 
    while (leftPointer <= rightPointer) {
        if (leftMax <= rightMax) {
            if (leftMax - height[leftPointer] > 0) {
                quantity += leftMax - height[leftPointer] 
            }
            if (height[leftPointer] > leftMax) {
                  leftMax = height[leftPointer]
             }
              leftPointer++; 
        }
        else {
             if (rightMax - height[rightPointer] > 0) {
                quantity += rightMax - height[rightPointer] 
            }
            if (height[rightPointer] > rightMax) {
                  rightMax = height[rightPointer]
             }
              rightPointer--; 
        }
    }  
      
     
    return quantity 
 
 };