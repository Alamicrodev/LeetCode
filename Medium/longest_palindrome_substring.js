// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"
 
// ---------------------- My Solution BruteForce O(N^3) Time Complexity ----------------------------------

// var longestPalindrome = function(s) {
//      let lPalindrome = ""

//     for (let i = 0; i<s.length; i++) {
//         for (let k = i+lPalindrome.length; k < s.length; k++) {
//             let substr = s.substring(i, k+1)
//             if (substr == substr.split("").reverse().join("")) {
//                 if (lPalindrome.length < substr.length) {
//                     lPalindrome = substr
//                 } 
//             }

//         }
//     }
//     return lPalindrome
// }

// ---------------------- My Solution O(N^2) Time Complexity ----------------------------------


function expandFromCenter(left, right, string) {

    if (left > right || string == "") {
        return 0
    }  

    while((left >= 0 && right < string.length) && string[left] === string[right]) {
        left--; 
        right++; 
    }

    return (right - left - 1)
} 

var longestPalindrome = function(s) {
    let lPalindrome = ""
      let Olength = 0
      let start = 0
      let end = 0
      for (let i=0; i < s.length; i++) {
         let lengthOdd = expandFromCenter(i,i,s)
         let lengthEven = expandFromCenter(i,i+1,s)

         let length = Math.max(lengthOdd, lengthEven)
         if (length > Olength) {
             Olength = length
             start = i-(length/2-1)
             end = i+(length/2)
         }
      } 

         return s.substring(start, end+1)

};