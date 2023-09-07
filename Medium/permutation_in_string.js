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

// ---------------------- Better Solution [O(26*n)]  ----------------------------------
// Sliding Window Algorithm 
// Remembers matches

var checkInclusion = function(s1, s2) {

  if (s1.length > s2.length) {
      return false; 
  }
  
  let s1Map = new Array(26);
  s1Map.fill(0, 0, 26);
  let windowMap = new Array(26); 
  windowMap.fill(0, 0, 26);

  for (let i = 0; i<s1.length; i++) {
      s1Map[s1[i].charCodeAt(0)-97] += 1; 
      windowMap[s2[i].charCodeAt(0)-97] += 1; 
  }

  let matches = 0;

  for (let i =0; i < 26; i++){
      if (s1Map[i] == windowMap[i]) {
          matches++; 
      }
  } 

  let p1 = 0; 
  let p2 = s1.length; 

  while(p2 < s2.length){
     if (matches == 26) {
         return true
     }
      

     let index = s2[p2].charCodeAt(0)-97;
     windowMap[index]+= 1; 
     if (s1Map[index] == windowMap[index]) {
         matches++; 
     }
     else if (s1Map[index]+1 == windowMap[index]) {
         matches--;
     }
      
     index = s2[p1].charCodeAt(0)-97;
     windowMap[index] -= 1; 
     if (s1Map[index] == windowMap[index]) {
         matches++; 
     }
     else if (s1Map[index]-1 == windowMap[index]) {
         matches--;
     }

      p1++; 
      p2++; 
   }

  return (matches == 26)
};
