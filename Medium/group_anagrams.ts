// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// ---------------------- My Solution [uses inbuilt sort method] ----------------------------------
// This solution uses the language's inbuilt sort method 
// Time Complexity O(m*nlogn), where m is the number of strings and nlogn is sorting time complexity 


function groupAnagrams(strs: string[]): string[][] {
         const groupHash : {[key: string]: string[]} = {}   //the key is the sorted string (which is same for all anagrams)
                                                            //the value is an array of strings storing all those strings which are anagrams
         for (let i = 0; i < strs.length; i++) {
               
               let sortedStr = strs[i].split("").sort().join("")  //sort the string

               if (groupHash[sortedStr] != undefined) {
                      groupHash[sortedStr].push(strs[i])
               }
               else {
                     groupHash[sortedStr] = [strs[i]]
               }
         }

           const outputArray : string[][] = []
           const groupHashKeys = Object.keys(groupHash) //go through all keys and push to output array
            for (let i = 0; i < groupHashKeys.length; i++) {
                     outputArray.push(groupHash[groupHashKeys[i]])
            }   
            
         return outputArray
}

// ---------------------- My Solution [uses hashMap] ----------------------------------
// This solution uses the language's inbuilt sort method 
// Time Complexity O(n.k), where n is the number of strings and k is the maximum length of a string. 

function groupAnagrams2(strs: string[]): string[][] {
         
       const groupHash: {[key: string]: string[]} = {}
       
       for (let i = 0; i < strs.length ; i++) {
            
            let str = strs[i];
             // array of 26 characters all of them being 0s.
            let key: number[] = Array(26).fill(0)  
                
            //going through each char in str and updating the key accordingly
            for (let j = 0; j < str.length; j++) {
                    const index = str[j].charCodeAt(0) - 'a'.charCodeAt(0)
                    key[index]++
                    //update value
            }

            if (groupHash[key.join(",")] != undefined) {
                groupHash[key.join(",")].push(str)
            }
            else {
                groupHash[key.join(",")] = [str]
            }
        
        }

        const outputArray : string[][] = []
        const groupHashKeys = Object.keys(groupHash) //go through all keys and push to output array
        for (let i = 0; i < groupHashKeys.length; i++) {
                     outputArray.push(groupHash[groupHashKeys[i]])
            }   

            return outputArray
}

