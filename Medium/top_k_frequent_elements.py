#  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

# Example 1:
# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]

# Example 2:
# Input: nums = [1], k = 1
# Output: [1]

# Constraints:
# 1 <= nums.length <= 105
# -104 <= nums[i] <= 104
# k is in the range [1, the number of unique elements in the array].
# It is guaranteed that the answer is unique.
 

# Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

# ---------------------- My Solution ----------------------------------
# Uses a form of counting sort. 
# Python3

def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numberCounter = {}
        for num in nums:
            if num in numberCounter:
                numberCounter[num] += 1
            else:
                numberCounter[num] = 1
        
        frequency = ["-"] * (len(nums)+1)
        print(frequency)

        for key in numberCounter:
            print(numberCounter[key])
            if frequency[numberCounter[key]] != "-":
                frequency[numberCounter[key]].append(key)
            else:
                frequency[numberCounter[key]] = [key]
        
        outputArray = []
        x = len(frequency)-1
        while x > 0:
            if frequency[x] != "-": 
                for num in frequency[x]:
                    outputArray.append(num)
                    if len(outputArray) == k:
                        return outputArray
            x -= 1        
               

