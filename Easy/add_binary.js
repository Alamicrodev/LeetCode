// Given two binary strings a and b, return their sum as a binary string.

 
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
 
// Constraints:
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// ---------------------- My Solution ----------------------------------

var addBinary = function(a, b) {
    
    if (a.length > b.length) {
        b = b.padStart(a.length, "0")
    }
    else {
        a = a.padStart(b.length, "0")
    }
    
    let carry = 0
    let finalResult = ""

    for (let i = a.length-1; i >= 0; i--) {
         
        let sum = Number(a[i]) + Number(b[i]) + carry
        carry = 0
        
        if (sum == 0 || sum == 1) {
          finalResult = String(sum) + finalResult 
        }
        else if (sum == 2) {
           finalResult = "0" + finalResult
           carry = 1
        }
        else if (sum == 3) {
            finalResult = "1" + finalResult
            carry = 1
        }
    }

    if (carry == 1) {
        finalResult = "1" + finalResult
    }

return finalResult
};