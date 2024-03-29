// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// ---------------------- My Solution ----------------------------------
// Uses a form of counting sort.

var topKFrequent = function(nums, k) {
    
    let counter = {}
    let frequency = []
    let answerArray = []

    for (let i = 0; i < nums.length; i++) {
        if (counter[nums[i]]) {
            counter[nums[i]]++; 
        }
        else {
            counter[nums[i]] = 1; 
        }
    }
     
    let counterList = Object.entries(counter) 

    for (let p =0; p< counterList.length; p++) {
        let [key, value] = counterList[p]
        if (frequency[value]) {
            frequency[value].push(key)
        } 
        else {
            frequency[value] = [key]
        }
    }

    outer: for (let l=nums.length; l>=1; l--){
          if (frequency[l]){
              for(let n=0; n<frequency[l].length; n++) {
                  answerArray.push(frequency[l][n])
                  if (answerArray.length == k) {
                      break outer; 
                  }
              }
          } 
    }

   return answerArray
};