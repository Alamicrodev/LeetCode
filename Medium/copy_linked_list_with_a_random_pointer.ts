// You are given the head of a linked list of length n. Unlike a singly linked list, each node contains an additional pointer random, which may point to any node in the list, or null.

// Create a deep copy of the list.

// The deep copy should consist of exactly n new nodes, each including:

// The original value val of the copied node
// A next pointer to the new node corresponding to the next pointer of the original node
// A random pointer to the new node corresponding to the random pointer of the original node
// Note: None of the pointers in the new list should point to nodes in the original list.

// Return the head of the copied linked list.

// In the examples, the linked list is represented as a list of n nodes. Each node is represented as a pair of [val, random_index] where random_index is the index of the node (0-indexed) that the random pointer points to, or null if it does not point to any node.

// Example 1:
// Input: head = [[3,null],[7,3],[4,0],[5,1]]
// Output: [[3,null],[7,3],[4,0],[5,1]]


// Example 2:
// Input: head = [[1,null],[2,2],[3,2]]
// Output: [[1,null],[2,2],[3,2]]

// Constraints:

// 0 <= n <= 100
// -100 <= Node.val <= 100
// Node values are not guaranteed to be unique.
// random is null or is pointing to some node in the linked list.


// ________________________________________ My Solution _________________________________________________ 
// We keep a hashMap: old node as key, new copied node(created new) as value. 
// The hashMap stores the entire list, as key value pairs.  
// newNodes have .next and .random as null 
// then we iterate again, set newNode.next and newNode.random by using curr.next and curr.random as keys. (because their corresponding newNodes will be the values) :)


// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

function copyRandomList(head: Node | null): Node {
          
          const oldToNewList = new Map<Node, Node>(); 
          let curr = head; 

          if (curr == null) {
            return null ; 
          } 

          while (curr != null) {

              let newNode = new Node(); 
              newNode.val = curr.val; 
              newNode.next = null; 
              newNode.random = null; 

              oldToNewList.set(curr, newNode)

              curr = curr.next;
          }

          curr = head; 

          while (curr != null) {   
            let newNode = oldToNewList.get(curr); 
            newNode.next = oldToNewList.get(curr.next)?? null;   //if it is undefined return null 
            newNode.random = oldToNewList.get(curr.random)?? null; 

            curr = curr.next; 
          }

          let newHead = oldToNewList.get(head); 

          return newHead; 
}