# Each column must contain the digits 1-9 without repetition.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

# Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
# A Sudoku board (partially filled) could be valid but is not necessarily solvable.
# Each row must contain the digits 1-9 without repetition.
# Only the filled cells need to be validated according to the mentioned rules.
 

# Note:
# Input: board = 
# [["5","3",".",".","7",".",".",".","."]
# ,["6",".",".","1","9","5",".",".","."]
# ,[".","9","8",".",".",".",".","6","."]
# Example 1:
# ,["8",".",".",".","6",".",".",".","3"]
# ,["4",".",".","8",".","3",".",".","1"]
# ,["7",".",".",".","2",".",".",".","6"]
# ,[".","6",".",".",".",".","2","8","."]
# ,[".",".",".","4","1","9",".",".","5"]
# ,[".",".",".",".","8",".",".","7","9"]]
# Output: true

# Example 2
# Input: board = 
# [["8","3",".",".","7",".",".",".","."]
# ,["6",".",".","1","9","5",".",".","."]
# ,[".","9","8",".",".",".",".","6","."]
# ,["8",".",".",".","6",".",".",".","3"]
# ,["4",".",".","8",".","3",".",".","1"]
# ,["7",".",".",".","2",".",".",".","6"]
# ,[".","6",".",".",".",".","2","8","."]
# ,[".",".",".","4","1","9",".",".","5"]
# ,[".",".",".",".","8",".",".","7","9"]]
# Output: false

# Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

# ---------------------- My Solution O(n^2) ----------------------------------
# python3

def isValidSudoku(self, board: List[List[str]]) -> bool:

        setsHash = {}

        for rowIndex in range(0, len(board)):
            checkingSet = set()
            for elementIndex in range(0, len(board[rowIndex])):
                if board[rowIndex][elementIndex] != ".":
                    if board[rowIndex][elementIndex] in checkingSet: 
                        return False
                    else:
                        checkingSet.add(board[rowIndex][elementIndex])   

                    rowNo = math.floor(rowIndex/3)
                    columnNo = math.floor(elementIndex/3)
                    key = str(rowNo)+str(columnNo)

                    if board[rowIndex][elementIndex] != ".":
                        if key in setsHash: 
                            if board[rowIndex][elementIndex] in setsHash[key]:
                                return False
                            else:
                                setsHash[key].add(board[rowIndex][elementIndex])
                        else:
                            setsHash[key] = set()
                            setsHash[key].add(board[rowIndex][elementIndex])


        for columnIndex in range(0, len(board[0])):
            checkingSet = set()
            for rowIndex in range(0, len(board)):
                if board[rowIndex][columnIndex] != ".":
                    if board[rowIndex][columnIndex] in checkingSet: 
                        return False
                    else:
                        checkingSet.add(board[rowIndex][columnIndex])

        return True