// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

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


// ---------------------- My Solution (Recursive Approach) ----------------------------------
// What is meant by preorder? 
// First Root > left child > right child 

var preorderTraversal = function(root) {  

    if (root == null) {
        return []
    }

    return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
    
};

// ---------------------- My Solution (Itterative Approach) ----------------------------------

var preorderTraversal = function(root) {  
    
    if (root == null) {
         return []
     }

    let traversalArray = []
    let pointer = root
    let checkPointStack = []

    while (true) {
        
        traversalArray.push(pointer.val)

        if (pointer.left != null) {
            if (pointer.right != null) {
               checkPointStack.push(pointer.right)
            }
            pointer = pointer.left
              
        }
        else if (pointer.right != null) {
             pointer = pointer.right 
        }
        else {
           if (checkPointStack.length == 0){
               break;
           }
           else {
               pointer = checkPointStack.pop()
           }
                   
        }
       
    }
     
    return traversalArray
     
     
};