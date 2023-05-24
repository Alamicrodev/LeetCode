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

// ---------------------- My Solution ----------------------------------

var groupAnagrams = function(strs) {
    
    const alphaMap = {}
    // basically we are gonna count the ammount of times a char appears in string and use it to create a key.
    // and the value will be a list of all words with same key.
    // this will put all anagrams in same list with same key. 
    // alphaMap["a1b2c4"] = ["words"]...] 
 
    for (let i = 0; i<strs.length; i++) {
        let word = strs[i]
        // array of 26 characters all of them being 0s.
        let key = Array(26).fill(0)
        
        for (let k = 0; k < word.length; k++) {
             let ordinal = word.charCodeAt(k)-"a".charCodeAt(0)
             key[ordinal]++; 
        }
        
        if (alphaMap[key]) {
            alphaMap[key].push(word)
        } 
        else {
            alphaMap[key] = [word]
        }
    }
 
    let resultArray = []
 
    let keys = Object.keys(alphaMap)
 
    for(let i = 0; i<keys.length; i++) {
        resultArray.push(alphaMap[keys[i]])
    }
 
    return resultArray
 };