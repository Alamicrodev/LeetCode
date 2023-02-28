// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1
 
// ---------------------- My Solution ----------------------------------

var firstUniqChar = function(s) {
    
    let hashTable = {}

    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]] >= 1){
            hashTable[s[i]]++ 
        }  
        else {
            hashTable[s[i]] = 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]] == 1) {
            return i
        }
    }
    
    return -1

};
