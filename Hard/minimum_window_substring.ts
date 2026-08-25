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
// have a targetHashMap (tMap) with t's characters and their count as values. 
// have a rHashMap (rMap) tracking the count of characters in current substring sliding window. BUT only track those char in Tmap. 
// any char not in tMap we simply ignore. 
// track the number of characters req to match, and the ammount matched so far. in match var. 
// when match and reqMatch become equal, we have found a target subtring, then check its length, if < minLength > update minLength & substring. 
// once a substr is found, try to minimize it by moving l(left pointer forward) forward. 
// on each move do the reverse, keep doing until match != reqMatches. 
// then again move forward with r pointer.    



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