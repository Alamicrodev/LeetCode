// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram. 

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.


// Example 2:
// Input: heights = [2,4]
// Output: 4
 
// Constraints:
// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

// ---------------------- My Solution ----------------------------------

var largestRectangleArea = function(heights) {
   
    let stack = []
    let maxArea = 0 
 
    for (let i = 0; i < heights.length; i++) {
        if (stack.length == 0) {
            stack.push([i, heights[i]])
        }
        else {
            
            let prevArea = stack[stack.length-1] 
            if (prevArea[1] > heights[i]) {
                let prevAreaIndex =  prevArea[0] 
                while (prevArea[1] > heights[i]) {
                   prevAreaIndex = prevArea[0]
                   let width = i - prevArea[0]
                   let height = prevArea[1] 
                   let area = width*height 
 
                    if (area > maxArea) {
                             maxArea = area
                     } 
                     stack.pop()
                
                     if (stack.length >= 1) {
                         prevArea = stack[stack.length-1]
                     }
                     else {
                           break; 
                     }
                 }
 
                 stack.push([prevAreaIndex, heights[i]])
            }
            else {
              stack.push([i, heights[i]])
            }
 
        }
     }
 
        if (stack.length != 0) {
            for (let i = stack.length-1; i >= 0; i--) {
 
            let width = (heights.length)-stack[i][0]
            let height = stack[i][1]
 
            let area = width*height 
 
            if (area>maxArea) {
                maxArea = area
            } 
 
              stack.pop()
            }
        }
        
 
 
    return maxArea
 
 };