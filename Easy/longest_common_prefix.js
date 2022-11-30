// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// You may also recieve emty list or empty strings


// ---------------------- My Solution ----------------------------------

var longestCommonPrefix = function(strs) {
    if (strs == []) {
        return ""
    } 

    let strsCopy = [...strs]
    let firstStr = strsCopy[0]
    
    let prefix = ""
    
    let indexCount = 0
    
    while(true) {  
        for (let str of strsCopy) {
            if (str.length == 0)
                {
                    return ""
                }

            if (!str[indexCount]) {
                return prefix
            }

            if (str[indexCount] != firstStr[indexCount]) {
                return prefix
            }
        }
        
        indexCount += 1
        prefix = firstStr.substring(0,indexCount)
        
    }
};
