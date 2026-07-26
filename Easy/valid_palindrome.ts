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
// Solution is too simple using two pointers, and skipping any non-alphanumeric character. 
// also when comparing make sure both are lowercase characters. 


function isPalindrome(s: string): boolean {

       let i = 0; 
       let j = s.length-1; 
       
       function isAlphaNumeric(c: string): boolean {
              
              let code = c.charCodeAt(0); 

              return  ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 93 && code <= 122))

       }
    

       while ( i < j ) {
          
          if (!isAlphaNumeric(s[i])) {
             i++; 
             continue; 
          }

          if (!isAlphaNumeric(s[j])) {
            j--; 
            continue;
          }

          if (s[i].toLowerCase() == s[j].toLowerCase()) {
              i++;
              j--; 
              continue; 
          }
          else {
            return false 
          }
       }
       
       return true; 

}