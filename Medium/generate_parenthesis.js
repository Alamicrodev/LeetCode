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
    
    var stack = []
    var output = []

    
    function generateEntry(open, closed) {
        
        // if open and closed are same and are equal to n this means we have found a valid entry.
        // so we convert the stack to a string and add it to output. 
        if (open == closed && open == n) {
            output.push(stack.join(""))
            return
        }

        // At each point we have two possibilities:
        // Add ( only if total open are less than n. 
        // Add ) only if the total close are less than total open. 

        // if total open are less than n. We add ( and call the function again. 
        // once it returns we cancel our decision by popping because we want to go to
        // the other possible path. 
        if (open < n){
            stack.push("(")
            generateEntry(open+1, closed)
            stack.pop()
        }

        // the other possible path is adding a ) if the total closed < total open. 
        // we do that and call the function again. 
        // We pop because when we go back we do not want problems. 
        if (closed < open)
        {
            stack.push(")")
            generateEntry(open, closed+1)
            stack.pop()
        }

    }

    generateEntry(0,0)

    return output

};