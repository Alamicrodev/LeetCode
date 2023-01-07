// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"
 
// ---------------------- My Solution ----------------------------------

var longestPalindrome = function(s) {
    for (let i = 0; i<s.length; i++) {
        for (let k = i+lPalindrome.length; k < s.length; k++) {
            let substr = s.substring(i, k+1)
            if (substr == substr.split("").reverse().join("")) {
                if (lPalindrome.length < substr.length) {
                    lPalindrome = substr
                } 
            }

        }
    }

    return lPalindrome
}