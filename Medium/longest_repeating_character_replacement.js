// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achive this answer too.
 
// Constraints:
// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

// ---------------------- My Solution (O(26*n)) ----------------------------------
// explanation: we create a hashmap that contains alphabets and its counts in a window. 
// There will be a changing sliding window with each iteration. 
// Similarly we update the counts in hashmap. 
// We characterize the window as valid and invalid, this is acchieved by checking if 
// maxCountCharacter in hashmap subtracted from total length of window is <= k.
// if so the other extra characters can be replaced due to k so the window is valid. 
// otherwise we keep increasing left pointer(removing count from hashmap) until the 
// window becomes valid again.
// Then we check if the valid window size is bigger than result if so we update result.
// in the end we increment right pointer. 


var characterReplacement = function(s, k) {
    let charMap = {}
    let l = 0
    let r = 0
    let result = 0 

    while(r < s.length) {
         charMap[s[r]] = charMap[s[r]]? charMap[s[r]]+1 : 1;
         
         while ((r-l+1) - Math.max(...Object.values(charMap)) > k) {
             charMap[s[l]] = --charMap[s[l]];
             l++;  
         }

        if (r-l+1 > result) {
            result = r-l+1;
        }
        r++;    
    }
    
    return result; 
};