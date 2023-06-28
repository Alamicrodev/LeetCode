# Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

# Example 1:
# Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
# Output: 6
# Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

# Example 2:
# Input: height = [4,2,0,3,2,5]
# Output: 9
 
# Constraints:
# n == height.length
# 1 <= n <= 2 * 104
# 0 <= height[i] <= 105

# ---------------------- My Solution ----------------------------------

def trap(height: List[int]) -> int:
        leftP = 0
        rightP = len(height)-1
        leftMax = 0 
        rightMax = 0
        totalContained = 0

        while leftP <= rightP:
            if leftMax <= rightMax:
                cQuantity = leftMax - height[leftP]
                if (cQuantity > 0):
                     totalContained += cQuantity
                if height[leftP] > leftMax:
                    leftMax = height[leftP]
                leftP += 1
            else:
                cQuantity = rightMax - height[rightP]
                if (cQuantity > 0):
                     totalContained += cQuantity
                if height[rightP] > rightMax:
                    rightMax = height[rightP]
                rightP -= 1

        return totalContained