// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]
 
// Constraints:
// 1 <= n <= 8

// ---------------------- My Solution ----------------------------------

var generateParenthesis = function(n) {
    
    var Parenth = []
    var output = []

    
    function generateEntry(open, closed) {
        
        if (open == closed && open == n) {
            output.push(Parenth.join(""))
            return
        }

        if (open < n){
            Parenth.push("(")
            generateEntry(open+1, closed)
            Parenth.pop()
        }

        if (closed < open)
        {
            Parenth.push(")")
            generateEntry(open, closed+1)
            Parenth.pop()
        }

    }

    generateEntry(0,0)

    return output

};