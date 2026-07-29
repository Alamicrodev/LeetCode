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
 


// ---------------------- My Solution (O(n)) ----------------------------------
// Uses a set > keep storing unique chars s[j] in set > if s[j] already in set keep removing s[i] from set until s[j] no longer in set 
// each time you succesfully add s[j], make sure to check if set.size > maxLength. If so? update maxLength. 
// if j > s.length-1 end outer loop return maxLength; 

//Note: 
// This looks like an O(n)^2 solution because there are multiple loops one inside another.
// but the internal loop never actually resets, its moving in the same direction too with j. 
// that's why instead of multiplying O(n)*O(n) we simply add them O(2n) > removing constants > O(n); 



function lengthOfLongestSubstring(s: string): number {
       
       if (s.length == 0) return 0 
       if (s.length == 1) return 1
      
        let i = 0; 
        let j = 1; 
        let maxLength = 0; 
        let mySet = new Set<string>(); 
        mySet.add(s[i]);

        while (j < s.length) {
           while (mySet.has(s[j])) {
            mySet.delete(s[i])
            i++; 
          }

          mySet.add(s[j]); 
          if (mySet.size > maxLength) {
            maxLength = mySet.size; 
          }
          j++
        }
        
        return maxLength
    }