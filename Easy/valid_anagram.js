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
    
    
    if (s.length != t.length) {
        return false
    }
    
    let charsObjs = {}
    let charsObjt = {}

    for (let i = 0; i < s.length; i++) {
        if (charsObjs[s[i]] >= 1) {
            charsObjs[s[i]]++;
        }
        else {
            charsObjs[s[i]] = 1; 
        }

        if (charsObjt[t[i]] >= 1) {
            charsObjt[t[i]]++;
        }
        else {
            charsObjt[t[i]] = 1;
        }
    }

    for (let key of Object.keys(charsObjs)) {
        if (charsObjs[key] != charsObjt[key])
        {
            return false 
        }
    }

    return true 
    
};