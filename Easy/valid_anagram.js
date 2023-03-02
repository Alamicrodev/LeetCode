// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
 
// ---------------------- My Solution ----------------------------------

var isAnagram = function(s, t) {
    
    let charsObj = {}

    for (let i = 0; i < s.length; i++) {
        if (charsObj[s[i]] >= 1) {
            charsObj[s[i]]++;
        }
        else {
            charsObj[s[i]] = 1; 
        }
    }

    for (let i = 0; i < t.length; i++) {
         if (charsObj[t[i]] >= 1) {
            charsObj[t[i]]--;
        }
        else {
            return false 
        }
    }

    for (let key of Object.keys(charsObj)) {
        if (charsObj[key] != 0)
        {
            return false 
        }
    }

    return true 
};