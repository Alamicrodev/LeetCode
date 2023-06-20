# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# Example 1:
# Input: n = 3
# Output: ["((()))","(()())","(())()","()(())","()()()"]

# Example 2:
# Input: n = 1
# Output: ["()"]
 
# Constraints:
# 1 <= n <= 8

# ---------------------- My Solution ----------------------------------

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        output = set()
        oneEntry = []

        def addParenthesis(n, start, end):
            if start == end and end == n:
                output.add("".join(oneEntry))
                return 
            
            if len(oneEntry) == 0:
                oneEntry.append("(")
                addParenthesis(n, start+1, end)
                oneEntry.pop()
           
            if end < start: 
                oneEntry.append(")")
                addParenthesis(n, start, end+1)
                oneEntry.pop()

            if start < n: 
                oneEntry.append("(")
                addParenthesis(n, start+1, end)
                oneEntry.pop()
            
            
        addParenthesis(n, 0, 0)
        output = list(output)
        return output
                 
