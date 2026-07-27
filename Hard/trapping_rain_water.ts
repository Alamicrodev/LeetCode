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
// Note: we have to calculate overall rainwater stored in the entire block not the max rainWater stored in a container. 
// Water stored at each index is given as: water(i) = min(leftMax, rightMax) - height[i] 
// So we have a while loop (l < r), yes two pointers left and right.
// Two variables, storing maxLeft and maxRight up until those pointers.  
// smaller max is the binding constraint(because we only need the min of leftMax/rightMax) → move that pointer[l++], update its max[leftMax = math.max(leftMax, height(l))], accumulate water (res += leftMax-height(l));

function trap(height: number[]): number {
        
        let l = 0;
        let r = height.length-1; 
        let leftMax = height[l]; 
        let rightMax = height[r]; 
        let res = 0; 

        while (l < r) {
            if (leftMax < rightMax) {
                 l++;
                 leftMax = Math.max(leftMax, height[l])
                 res += leftMax - height[l]
            }
            else {
                 r--; 
                 rightMax = Math.max(rightMax, height[r])
                 res += rightMax - height[r]
            }
        }

       return res
    }