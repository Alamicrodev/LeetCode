// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

// You may assume that the correct output is always unique.

// Example 1:

// Input: s = "OUZODYXAZV", t = "XYZ"

// Output: "YXAZ"
// Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

// Example 2:

// Input: s = "xyz", t = "xyz"

// Output: "xyz"
// Example 3:

// Input: s = "x", t = "xy"

// Output: ""
// Constraints:

// 1 <= s.length <= 100,000
// 1 <= t.length <= 100,000
// s and t consist of uppercase and lowercase English letters.

// ____________________________________  My Solution O(n) Time __________________________________________
// have a targetHashMap (tMap) with t's characters and their required count as values.

// have a rHashMap (rMap) tracking the count of characters in the current
// substring sliding window. BUT only track characters that exist in tMap.

// any character not in rMap's already populated keys (based on tMap but with values 0)   is simply ignored.

// track the number of required characters that have been matched so far
// in the match variable. reqMatch represents the total number of distinct
// characters from t that need to be satisfied.

// when match and reqMatch become equal, we have found a valid target substring.
// Then check its length. If it is smaller than minLength, update minLength
// and save the current substring.

// once a valid substring is found, try to minimize it by moving the left
// pointer forward.

// on each move, check the character being removed from the window.
// Decrease its count in rMap, and if removing it causes that character's
// required count to no longer be satisfied, decrease match.

// keep moving l forward while match == reqMatch.

// once match != reqMatch, the current window is no longer valid,
// so stop moving l and continue moving r forward to find another valid window.

// repeat this process until r reaches the end of the string.


function minWindow(s: string, t: string): string {
         
         let tMap : {[key: string]: number} = {}; 
         let rMap : {[key: string]: number} = {};  
         for (let char of t) {
           tMap[char] = tMap[char]? tMap[char]+1: 1;   
         }
         for (let char of t){
            rMap[char] = 0; 
         }
         let reqMatches = Object.keys(tMap).length; 
         let match = 0; 
         let minLength = Infinity; 
         let subStr = ""; 
         let l = 0; 
         let r = 0; 

         

         while (r < s.length) {
            if (s[r] in rMap) {
                rMap[s[r]]++; 
                if (rMap[s[r]] === tMap[s[r]]) {
                    match++; 
                }
                   while (match == reqMatches) {
                        
                        if (minLength > (r-l)+1) {
                                     subStr = s.substring(l,r+1); 
                                     minLength = (r-l)+1; 
                                } 

                        if (s[l] in rMap) {
                            rMap[s[l]]--; 
                            if (rMap[s[l]] < tMap[s[l]]) {
                               match--; 
                            }
                        }
                        l++;
                   }
            }
            r++; 
         }

          return subStr
    }