// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 

// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false

// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// ---------------------- My Solution O(n^2) ----------------------------------

var isValidSudoku = function(board) {

    let allCubs = [[],[],[],[],[],[],[],[],[]]
    
    for (let i = 0; i < board.length; i++) {
        let set = new Set()
        for (let k = 0; k < board[i].length; k++){
            let cell = board[i][k]
            if (cell != ".") {
                if (set.has(cell)) {
                    return false 
                }
                else {
                    set.add(cell)
                }
            }

            if (Math.trunc(i/3) == 0) {
                if (Math.trunc(k/3) == 0) {
                    allCubs[0].push(cell)
                }
                else if (Math.trunc(k/3) == 1) {
                    allCubs[1].push(cell)
                }
                else if (Math.trunc(k/3) == 2) {
                    allCubs[2].push(cell)
                }
            }
            else if (Math.trunc(i/3) == 1) {
                if (Math.trunc(k/3) == 0) {
                    allCubs[3].push(cell)
                }
                else if (Math.trunc(k/3) == 1) {
                    allCubs[4].push(cell)
                }
                else if (Math.trunc(k/3) == 2) {
                    allCubs[5].push(cell)
                }
            }
            else if (Math.trunc(i/3) == 2) {
                if (Math.trunc(k/3) == 0) {
                    allCubs[6].push(board[i][k])
                }
                else if (Math.trunc(k/3) == 1) {
                    allCubs[7].push(board[i][k])
                }
                else if (Math.trunc(k/3) == 2) {
                    allCubs[8].push(board[i][k])
                }
            }

        }
    }

    for (let k = 0; k<board[0].length; k++) {
        let set = new Set()
        for (let i = 0; i < board.length; i++) {
            let cell = board[i][k]
            if (cell != ".") {
                if (set.has(cell)) {
                        return false 
                    }
                    else {
                        set.add(cell)
                    } 
            }
        }
    }
    
    for (let i = 0; i < allCubs.length; i++) {
        let set = new Set()
        for (let k = 0; k < allCubs[0].length; k++) {
            let cell = allCubs[i][k]
             if (cell != ".") {
                if (set.has(cell)) {
                    return false 
                }
                else {
                     set.add(cell)
                }
            }
        }
    }  

return true 
};