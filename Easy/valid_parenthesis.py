# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:
# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
 
# Example 1:
# Input: s = "()"
# Output: true

# Example 2:
# Input: s = "([]){}"
# Output: true

# Example 3:
# Input: s = "(]"
# Output: false

# ---------------------- My Solution ----------------------------------


class Solution:
    def isValid(self, s: str) -> bool:
        bracketCloser = {
            "(": ")",
            "{": "}",
            "[": "]"
        }

        stack = []

        for character in s:
            if character == '(' or character == "{" or character == "[":
                stack.append(bracketCloser[character])
            else:
                if len(stack) == 0: 
                    return False
                if character == stack[len(stack)-1]:
                    stack.pop()
                else:
                    return False; 
        
        if len(stack) == 0: 
            return True
        else: 
            return False


        