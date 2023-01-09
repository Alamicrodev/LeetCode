// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

// ---------------------- My Solution ----------------------------------


var convert = function(s, numRows) {
    if (numRows == 1) {
        return s
    }

    let array = []
    for (let x = 0; x < numRows; x++) {
        array.push([])
    }
     
    let index = 0
    let rowTracker = 0
    let columnTracker = 0

    while(index < s.length) {

        if (rowTracker == array.length-1){
            while(rowTracker != 0 && index < s.length) {
                array[rowTracker][columnTracker] = s[index]
                index++;
                rowTracker--; 
                columnTracker++;  
            }
        }
        else {
          array[rowTracker][columnTracker] = s[index]
          rowTracker++; 
          index++; 
        } 
     }

    
     let resultString = ""

     array.forEach((childArray) => {
         childArray.forEach((element) => {
             if (element != undefined) {
                 resultString += element
             }
         })
     })
    
    return resultString
};