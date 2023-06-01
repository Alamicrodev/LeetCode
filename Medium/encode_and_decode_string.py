# Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

# Please implement encode and decode

# Example1
# Input: ["lint","code","love","you"]
# Output: ["lint","code","love","you"]
# Explanation:
# One possible encode method is: "lint:;code:;love:;you"

# Example2
# Input: ["we", "say", ":", "yes"]
# Output: ["we", "say", ":", "yes"]
# Explanation:
# One possible encode method is: "we:;say:;:::;yes"

# ---------------------- My Solution ----------------------------------


def encode(strs):
    outputString = ""
    for word in strs:
        outputString = outputString+str(len(word))+"#"+word
    return outputString

def decode(str):
    wordArray = []
    x = 0
    while x < len(str):
        try: 
            j = x 
            while str[j] != "#":
                j += 1;  
            wordCount = int(str[x:j])
            wordArray.append(str[j+1:j+1+wordCount])
            x = j+1+wordCount
        except:
            x+=1
            continue
    return wordArray
    
print(encode(["happy", "crazy", "wierdd", ";", "joiiiiiiiiiiiiiin"]))
print(decode(encode(["happy", "crazy", "wierdd", ";", "joiiiiiiiiiiiiiin"])))


