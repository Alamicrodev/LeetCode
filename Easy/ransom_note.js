// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.


// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 
// ---------------------- My Solution ----------------------------------

var canConstruct = function(ransomNote, magazine) {
    
    let magLetters = {}

    for (let i = 0; i < magazine.length; i++) {
        if (magLetters[magazine[i]] >= 1) {
            magLetters[magazine[i]]++; 
        }
        else {
            magLetters[magazine[i]] = 1
        }
    }

    console.log(magLetters)

    for (let i = 0; i < ransomNote.length; i++) {
        if (magLetters[ransomNote[i]] >= 1){
            magLetters[ransomNote[i]]--;
        }
        else 
        {
            return false
        }
    }

    return true 
};