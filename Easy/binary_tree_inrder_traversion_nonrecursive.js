// Given the root of a binary tree, return the inorder traversal of its nodes' values.


// Example 1:
// Input: root = [1,null,2,3]
        //   1
        //  n  2 
        //    3 n
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
// What is inorder traversal method? 
// From left to right eg left node > parent > right node

var inorderTraversal = function(root) {
    if (root == null) {
        return []
    }

    return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
};

// ---------------------- My Solution (Itterative Method) ----------------------------------
// Morris Algorithm to traverse a binary tree without recursion
// You can find the explanation for the Morris Algorithm Here: https://www.youtube.com/watch?v=0ydDMtuvbUY

var inorderTraversal = function(root) {

    let tourist = root 
    let resultArray = []
    
    while (tourist != null) {
       let guide = tourist.left
    
       if (tourist.left != null) {
            while (guide.right != null && guide.right != tourist){
                guide = guide.right
            } 
            
            if (guide.right == null) {
                guide.right = tourist
                tourist = tourist.left
            }
            else {
                guide.right = null
                resultArray.push(tourist.val)
                tourist = tourist.right 
            }
    
       }
       else 
       {
           resultArray.push(tourist.val)
           tourist = tourist.right
       } 
    
    } 
    
    return resultArray
     
    };


