// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// ---------------------- My Solution ----------------------------------


var lengthOfLongestSubstring = function(s) {
    let uniqueChar = []
    let length = 0
    
    for (let i=0; i<s.length; i++) {
        for (let k=0; k<s.length; k++) {
             while (uniqueChar.includes(s[k])) {
                  var index = uniqueChar.indexOf(s[i]);
                  uniqueChar.splice(index, 1);
                  i++; 
             }
             uniqueChar.push(s[k]);
             if (length < uniqueChar.length) {
                 length = uniqueChar.length
             }
        }
       break;
    } 
    return length
};