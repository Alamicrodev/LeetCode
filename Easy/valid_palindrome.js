// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
 

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 
// ---------------------- My Solution ----------------------------------

var isPalindrome = function(s) {
    let pointerA = 0
    let pointerB = s.length-1 
    let sLower = s.toLowerCase()
    let alphaNumerics = new Set()

    for (let i = 48; i <= 57; i++) {
        alphaNumerics.add(String.fromCharCode(i))
    }
     for (let i = 97; i <= 122; i++) {
        alphaNumerics.add(String.fromCharCode(i))
    }

    while (pointerA < pointerB) {
       if (!alphaNumerics.has(sLower[pointerA])) {
           pointerA++;
           continue; 
       }
       if (!alphaNumerics.has(sLower[pointerB])) {
           pointerB--;
           continue; 
       } 

        if (sLower[pointerA] != sLower[pointerB]) {
            return false 
        } 

        pointerA++; 
        pointerB--; 
    }

return true 
};