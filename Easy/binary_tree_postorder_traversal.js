// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
 

// Constraints:
// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// ---------------------- My Solution (Recursive Approach) ----------------------------------
// What is inorder traversal method? 
// From left to right eg left node > right node > parent
// The parent is after left and right get it XD it comes post left and right

var postorderTraversal = function(root) {
    
    if (root == null) {
        return []
    }
    else {
         return [...postorderTraversal(root.left),...postorderTraversal(root.right),root.val]
    }
      
};

// ---------------------- My Solution (Itterative Approach) ----------------------------------
// Unfortunately you cannot traverse the values of the node, first you simply have to traverse the 
// nodes and then you can replace them with their values in a new array. (line 97)

var postorderTraversal = function(root) {
  
    if (root == null) {
        return []
    }
 
   let pointersArray = []
   let stack = []
   let pointer = root
 
   outerLoop:
   while(true){
       if (pointer.left != null) {
           stack.push(pointer)
           pointer = pointer.left
       }
       else {
           if (pointer.right != null) {
               stack.push(pointer)
               pointer = pointer.right 
           }
           else {
               pointersArray.push(pointer)
 
               while (stack.length != 0) {
                   let prevPointer = stack.pop()
                   if (prevPointer.right == pointersArray[pointersArray.length-1])                 {    
                       pointersArray.push(prevPointer)
                       continue
                   }
                   else {
                       if (prevPointer.right != null) {
                           stack.push(prevPointer)
                           pointer = prevPointer.right
                           continue outerLoop
                       }
                       else {
                           pointersArray.push(prevPointer)
                           continue
                       }
                       
                   }
               }
               break
           }
       }
   } 
 
 let resultArray = pointersArray.map((node) => node.val)
 
 return resultArray
 };





