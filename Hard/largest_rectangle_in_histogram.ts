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
// Monotonic increasing stack: stores [startIndex, height]. 
// startIndex = the furthest left index where this height can still form a rectangle. (the heights at those indexes are either equal or greaterthan this height)
// If the current height is smaller than the stack's top height(right most), 
// the taller bars(or bar) from the top of the stack can't extend any further, so start popping them until you reach a shorter bar that can extend further. 
// For each popped bar: 
// area = height * (currentIndex - startIndex) 
// update maxArea.  
// Keep the earliest startIndex from the popped bars and assign it 
// to the current height's startIndex before pushing it, since the current (shorter) 
// height can also extend from that earlier position.


function largestRectangleArea(heights: number[]): number {
            
          const monoStack : [number, number][]  = []
          let maxArea = 0; 
           
          for (let i = 0; i < heights.length; i++) {
               
               if (monoStack.length == 0 || monoStack[monoStack.length-1][0] < heights[i]) {
                       monoStack.push([heights[i], i])
                   }
               else if (monoStack.length != 0 && monoStack[monoStack.length-1][0] == heights[i]) {
                               let entry = monoStack.pop(); 
                               let [height, sIndex] = entry; 
                               monoStack.push([heights[i], sIndex])
                    }
               else {
                        let lastIndex = i; 
                        
                        while(monoStack.length != 0 && monoStack[monoStack.length-1][0] > heights[i]) {
    
                                let entry = monoStack.pop();  
                                let [height, sIndex] = entry; 
                                let width = i - sIndex; 
                                let area = width * height; 
                                if (area > maxArea) {
                                    maxArea = area; 
                                } 
                                if (sIndex < lastIndex) {
                                    lastIndex = sIndex;
                                } 
                        }
                        monoStack.push([heights[i], lastIndex])
                    }    
          }

          if (monoStack.length != 0) {
             for (let i = 0; i < monoStack.length; i++) {
                  let entry = monoStack[i]; 
                  let [height, sIndex] = entry; 
                  let width = heights.length - sIndex; 
                  let area = width * height; 
                            if (area > maxArea) {
                                maxArea = area; 
                            } 
             }
          }

          return maxArea
         
    }