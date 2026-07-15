// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Example 1:

// Input: s = "[]"

// Output: true
// Example 2:

// Input: s = "([{}])"

// Output: true
// Example 3:

// Input: s = "[(])"

// Output: false
// Explanation: The brackets are not closed in the correct order.

// Constraints:

// 1 <= s.length <= 1000

// ____________________________________________ My Solution ______________________________________________


function isValid(s: string): boolean {
        
          const myStack : string[] = []
          const matchMap : { [key : string]: string } = 
          { ")" : "(", 
            "]" : "[",
            "}" : "{" }
       
             for (let i = 0; i< s.length; i++) {
                   
                   if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
                       myStack.unshift(s[i])
                   }
                   else {
                        
                        if (myStack[0] == matchMap[s[i]] ) {
                            myStack.shift(); 
                        }
                        else {
                            return false
                        }
                   }
             }

             if (myStack.length != 0) {
                return false 
             }

           return true 
    }
