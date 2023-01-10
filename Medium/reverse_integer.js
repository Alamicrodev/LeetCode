// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21
 
// Constraints:
// -231 <= x <= 231 - 1

// ---------------------- My Solution ----------------------------------

var reverse = function(x) {
    
    let xString = String(x)
    let xStringArray = xString.split("")
    let sign = ""

    if (xStringArray[0] == "-") {
        xStringArray.shift()
        xStringArray.reverse()
        xStringArray.unshift("-")
    }
    else {
        xStringArray.reverse()
    }

    let result = Number(xStringArray.join(""))

    if (result < -2147483648 || result > 2147483647) {
        return 0
    }

    return result

};