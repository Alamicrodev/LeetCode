// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
 
// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 
// ---------------------- Better Solution ----------------------------------


var compareTrees = function(a, b){
    if (!a && !b) {
        return true
    }
    if (!a || !b) {
        return false
    }
    if (a.val != b.val) {
        return false
    }

    return (compareTrees(a.left, b.right) && compareTrees(a.right, b.left)) 
} 

var isSymmetric = function(root) {
    if (!root) {
        return true
    }

    let a = root.left
    let b = root.right 

    return compareTrees(a,b)

};