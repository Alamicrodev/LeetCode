// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
 

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:
// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

// ---------------------- My Solution [O(n^2)]  ----------------------------------
// Sliding Window Algorithm 

function isObjectEqual(obj1, obj2) {
    let obj1Values = Object.values(obj1)
    let obj2Values = Object.values(obj2)

 for (let i = 0; i < 26; i++) {
   if (obj1Values[i] != obj2Values[i]){
     return false
   }
 }

  return true
}


var checkInclusion = function(s1, s2) {
   
   let s1Hash = {}
   let s2Hash = {} 

   for(let ch = 97; ch <= 122; ch++) {
     s1Hash[String.fromCharCode(ch)] = 0;
     s2Hash[String.fromCharCode(ch)] = 0; 
   }



   for (let i = 0; i<s1.length; i++) {
       s1Hash[s1[i]]++;
       s2Hash[s2[i]]++;
   }

    if (isObjectEqual(s1Hash,s2Hash)) {
           return true
       }
  


   let leftPointer = 0; 
   let rightPointer = leftPointer + s1.length -1;

   while (rightPointer < s2.length-1) {
         s2Hash[s2[leftPointer]]--;
         leftPointer++; 
         rightPointer++;
         s2Hash[s2[rightPointer]]++;
         

         if (isObjectEqual(s1Hash,s2Hash)) {
           return true
         }
   }

   return false

};
