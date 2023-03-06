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


var maxArea = function(height) {
    
    let leftPointer = 0
    let rightPointer = height.length-1
  
    let maxVolume = 0 
  
    while (leftPointer < rightPointer) {
        let width = rightPointer-leftPointer
        let minHeight = height[rightPointer] <= height[leftPointer] ? height[rightPointer] : height[leftPointer] 
        let volume = width * minHeight
  
         if (volume > maxVolume) {
             maxVolume = volume 
         }
        
        if (height[leftPointer] >= height[rightPointer]) {
            rightPointer--; 
        }
        else {
            leftPointer++; 
        }
  
    } 
  
  return maxVolume;
      
  };