// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// let letterObj = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz"
// }

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]
 
// ---------------------- My Solution ----------------------------------


var letterCombinations = function(digits) {
    let letterObj = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    let res = []


    let trackBack  = function(i, curString) {
        if (digits.length == curString.length) {
               res.push(curString)
               return
        }

        for (let k = 0; k < letterObj[digits[i]].length; k++) {
            trackBack(i+1, curString+letterObj[digits[i]][k])
        }
    }

    if (digits) {
        trackBack(0, "")
    }

    return res 

};