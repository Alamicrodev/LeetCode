// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
 
// ---------------------- My Solution ----------------------------------

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        
        const alphaCounter : {[ property : string ] : number } = {}   //f this object has any property its key is a string and value is a number.
          
         if (s.length != t.length) {
            return false
         }
         

         for (let i = 0; i < s.length; i++) {
              if (alphaCounter[s[i]]) {
                  alphaCounter[s[i]]++; 
              }
              else alphaCounter[s[i]] = 1; 
         }

         for (let i = 0; i < t.length; i++) {
              if (alphaCounter[t[i]] && alphaCounter[t[i]] >= 1) {
                 alphaCounter[t[i]]--; 
              }
              else {
                return false 
              }
         }
      
        return true 
    }
}
