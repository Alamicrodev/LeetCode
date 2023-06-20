# Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

# Example 1:
# Input: temperatures = [73,74,75,71,69,72,76,73]
# Output: [1,1,4,2,1,1,0,0]

# Example 2:
# Input: temperatures = [30,40,50,60]
# Output: [1,1,1,0]

# Example 3:
# Input: temperatures = [30,60,90]
# Output: [1,1,0]
 

# Constraints:
# 1 <= temperatures.length <= 105
# 30 <= temperatures[i] <= 100


# ---------------------- My Solution ----------------------------------
# This uses a monotonic stack 
# https://www.youtube.com/watch?v=Dq_ObZwTY_Q

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        monoStack = []
        output = [0]*len(temperatures)

        for i, num in enumerate(temperatures):
            if len(monoStack) == 0:
                monoStack.append([i,num])
            else: 
                while num > monoStack[len(monoStack)-1][1]:
                    index, number = monoStack.pop()
                    output[index] = i-index
                    if len(monoStack) == 0: 
                        break
                monoStack.append([i,num])
    
        return output