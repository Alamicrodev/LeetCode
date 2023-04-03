// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
 
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

// ---------------------- My Solution (Recursive Method) ----------------------------------

var inorderTraversal = function(root) {
    if (root == null) {
        return []
    }

    let traversalArray = []
    let pointer = root 


    function addToArray(pointer) {
        if (pointer.left != null) {
            addToArray(pointer.left)
            traversalArray.push(pointer.val)
            if (pointer.right != null) {
              addToArray(pointer.right)
            }
            else {
                return
            }
        }
        else {
            traversalArray.push(pointer.val)
            if (pointer.right != null) {
              addToArray(pointer.right)
            }
            else {
                return
            }
            
        }
    }

   addToArray(pointer)

   return traversalArray 

};