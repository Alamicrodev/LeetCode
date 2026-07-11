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
 

function isValidSudoku(board: string[][]): boolean {
        
        function hasDuplicate(nums : string[]) : boolean {
            const hashSet =  new Set()
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] != ".") {
                    if (hashSet.has(nums[i])) {
                        return true 
                    }
                    else hashSet.add(nums[i])
                }
            }
            return false
        }

        function getBlockIndex(i : number, j: number) : number {
            
            if  (i >= 0 && i < 3) {
                 if (j >= 0 && j < 3) {return 0}
                 if (j >= 3 && j < 6) {return 1}
                 if (j >= 6 && j < 9) {return 2}
 
            }
            else if (i >= 3 && i < 6) {
                 if (j >= 0 && j < 3) {return 3}
                 if (j >= 3 && j < 6) {return 4}
                 if (j >= 6 && j < 9) {return 5}
            }
            else {
                 if (j >= 0 && j < 3) {return 6}
                 if (j >= 3 && j < 6) {return 7}
                 if (j >= 6 && j < 9) {return 8}
            }
         
        }

        let blocks : string[][] = []
         


        for (let i = 0; i < board.length; i++) {
               if (hasDuplicate(board[i])) {
                   return false 
               } 
        }

        for (let j = 0; j<board[0].length; j++) {
            let columnArray = []
            for (let i = 0; i< board.length; i++) {
                columnArray.push(board[i][j])
                const block = getBlockIndex(i, j)
                if (blocks[block] != undefined) {
                     blocks[block].push(board[i][j])
                }
                else {
                    blocks[block] = [board[i][j]]
                }
                
            }

            if (hasDuplicate(columnArray)) {
                return false 
            }
        }

         
         for (let i = 0; i < blocks.length; i++) {
              if (hasDuplicate(blocks[i])) {
                  return false 
              }
         }
        
        return true

    }