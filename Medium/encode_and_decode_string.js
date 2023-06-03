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


function encode(strs){ 
    let outputString = ""
    for (let word of strs){
        outputString = outputString+String(word.length)+"#"+word
    }
    return outputString
}


function decode(str) {
    let wordArray = []
    let x = 0
    while (x < str.length){
        try {
            let j = x 
            while (str[j] != "#"){
                j += 1;  
            }
            wordCount = parseInt(str.substring(x,j))
            wordArray.push(str.substring(j+1,j+1+wordCount))
            x = j+1+wordCount
        }
        catch {
            x+=1
            continue
        }
        }
    return wordArray
}


console.log(encode(["happy", "crazy", "wierdd", ";", "joiiiiiiiiiiiiiin"]))
console.log(decode(encode(["happy", "crazy", "wierdd", ";", "joiiiiiiiiiiiiiin"])))