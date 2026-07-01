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
// solves in almost O(n) time complexity, 
// uses a form of bucket sort(counting sort). 


function topKFrequent(nums: number[], k: number): number[] {
        
        //first count all in a hashMap
        const hashCount : {[key: number]: number} = {}

        for (let i = 0; i < nums.length; i++) {

            if (hashCount[nums[i]] != undefined) {
                hashCount[nums[i]]++; 
            }
            else {
                hashCount[nums[i]] = 1; 
            }
        }

        //convert hashMap into array of [number, count]s
        let valueCountPairs : [string, number][] = Object.entries(hashCount)
        let freqArray = []   //index position will be count, and value will store the numbers in an array []
         
         for (let i = 0; i < valueCountPairs.length; i++) {
               const pair = valueCountPairs[i]
               if (freqArray[pair[1]] != undefined) {        //storing at index(count of a pair)
                    freqArray[pair[1]].push(Number(pair[0])) //storing the number in an array of numbers
               }
               else {
                     freqArray[pair[1]] = [Number(pair[0])]
               }
         }

         let result = []
          for (let i = freqArray.length-1; i >= 0; i--) {
               if (freqArray[i] == undefined) {continue}      //if no numbers have this count move down 
               else {
                for (let j = 0; j<freqArray[i].length; j++) {    
                       result.push(freqArray[i][j])           //push each number in the result array
                       if (result.length == k) {              //check if result array hit target, return result
                        return result
                       }
                }
               } 
          }


        return result                  //most probably will never run

    }