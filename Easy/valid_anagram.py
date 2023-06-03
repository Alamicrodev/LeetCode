# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

# Example 1:
# Input: s = "anagram", t = "nagaram"
# Output: true

# Example 2:
# Input: s = "rat", t = "car"
# Output: false
 
# ---------------------- My Solution ----------------------------------

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        charHash = {}
        for char in s: 
            if char in charHash: 
                charHash[char] = charHash[char]+1
            else: 
                charHash[char] = 1
        for char in t: 
            if char in charHash:
                charHash[char] = charHash[char]-1
            else:
                return False 

        for key in charHash: 
            if charHash[key] != 0:
                return False

        return True  
