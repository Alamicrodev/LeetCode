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


function characterReplacement(s: string, k: number): number {

        let i = 0;    //left  pointer 
        let j = 0;    //right pointer 

        let charHash : {[key: string]: number} = {}  //tracks {character: itscount}
        let maxCharCount = 1;                        //tracks the count of the max appearing character b/w  i&j. 
        let res = 0;                                 // tracks result
         

        while (j < s.length) {          
            if (charHash[s[j]]) {                            //increment count  in hashmap 
                charHash[s[j]]++; 
                if (charHash[s[j]] > maxCharCount) {
                    maxCharCount = charHash[s[j]]             //update maxCharCount if needed 
                }
               }
               else {
                   charHash[s[j]] = 1;                        //if not already, add it = 1; 
               }
            if ((j-i+1)-maxCharCount <= k) {
                if (res < (j-i+1)) {                          //if window valid, update res if needed 
                    res = j-i+1;                           
                } 
            }
            else {
                charHash[s[i]]--;                            //if window invalid, i++ and decrement count of s[i] from hashMap.
                i++;
            }
                 j++;                                        //move to next j, otherwise, it will stay stuck on same j in the enxt iter of loop and keep incrementing s[j]++ until it creates new maxCharCount 
        } 
         
        return res              //return res finally. 
    }


    //note: we don't really need to decrement maxCharCount when we do i++ or charHash[s[i]]--;
    // This is because: 
    // We are only hunting for a new record (res): To beat our current best result (res), 
    // any new window we evaluate must be larger than res. To achieve a larger window:
    // First, Remember all usable k count replacements have already been exhausted.
    // That's why we are at this point. To acchieve a larger/equal window now:  
    // we inherently need a frequency count (maxCharCount) that is at least as large as—or    
    // larger than—what we've already achieved. 
    // If the true max frequency in the current window drops, 
    // that window is too small to break our existing record anyway.
    // So we don't really care about decrementing it :) 
