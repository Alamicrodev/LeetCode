// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []
 

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

// ---------------------- My Solution ----------------------------------
// note: always remember that in order to do inorder traversal you need to use a queue

var levelOrder = function(root) {
    if (!root) {
        return []
    }
   
   let queue = [[root]] 
   let valuesList = []

   
   while (queue.length != 0) {
       let level = queue[0]
       let valuesLevel = []
       let nextLevel = []

       for (let pointer of level) {
          valuesLevel.push(pointer.val)
           if (pointer.left != null) {
              nextLevel.push(pointer.left)
           }
           if (pointer.right != null) {
              nextLevel.push(pointer.right)
           }
       }
       console.log(valuesLevel)
       valuesList.push(valuesLevel)
       if (nextLevel.length >= 1) {
           queue.push(nextLevel)
       }
       queue.shift()
   }
        return valuesList

};
    