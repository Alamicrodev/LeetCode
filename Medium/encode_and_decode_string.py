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
    return ";:;".join(strs)

    

def decode(str):
    return str.split(";:;")
    

print(decode(encode(["happy", "crazy", "wierdd", ";", "join"])))


