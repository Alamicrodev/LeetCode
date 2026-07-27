// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
 
// ---------------------- My Solution ----------------------------------
// two pointer problem: start a pointer on both ends, and calculate the maxWater by multiplying width with minheight; 
// find the minheight and incremenet or decrement it, and continue the loop
// if you find a bigger maxWater update maxWater. Let the loop run until both pointers are same or cross each other. 

function maxArea(heights: number[]): number {
      
      let i = 0; 
      let j = heights.length-1; 
      let maxWater = 0; 

      while (i < j) {
          let minheight = heights[i] < heights[j]? heights[i] : heights[j]; 
          let width = j - i; 
          let currWater = minheight*width; 

          if (currWater > maxWater) {
            maxWater = currWater; 
          }

          if (heights[i] < heights[j]) {
              i++; 
              continue; 
          }
          else if (heights[j] < heights[i]) {
               j--;
               continue;
          }
          else {
             i++; 
             continue; 
          }
      }


      return maxWater; 
    }