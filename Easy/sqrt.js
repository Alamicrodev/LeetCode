// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 
// Constraints:
// 0 <= x <= 231 - 1


// ---------------------- My Brute Force Solution ----------------------------------


var mySqrt = function(x) {
    if (x == 0) {
        return 0
    }
    else if (x == 1) {
        return 1
    }

    let num = 2

    while(num * num <= x) {
         if (num * num == x) {
             return num 
         }
         else {
             num += 1
         }
    }

return num-1 

};

// ---------------------- Better Solution ----------------------------------

let mySqrt = function(x) {
    if (x==0) {
        return 0
    }
    let root = x 
    try {
        while (0.5*(root + (x/root)) != root) {
            root = 0.5*(root + (x/root))
        }
        return root 
    }
    catch (err) {
        return 0
    }
}