// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode

// Example1
// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
// One possible encode method is: "lint:;code:;love:;you"

// Example2
// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
// Explanation:
// One possible encode method is: "we:;say:;:::;yes"

// ---------------------- My Solution ----------------------------------
// O(n+m) time complexity for enconde + decode 
// we encode storing the string length followed by hash eg   "11#jamesdumpte5#harry"   and then decode it

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
         let res = ""
         for (let i = 0; i< strs.length; i++) {
             res += (strs[i].length).toString() + "#" + strs[i]
         }
        return res; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
          
          const strArray : string[] = []
          let i = 0;
          while (i<str.length) {      
                let j = i;             
                while (str[j] != "#"){
                    j++; 
                }   
                let length = Number(str.substring(i,j))
                let strElement = str.substring(j+1, j+1+length)
                strArray.push(strElement)
                i = j+1+length
          }

         return strArray
    }
}
