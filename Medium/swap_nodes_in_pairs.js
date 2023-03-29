// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]
 
// note: in examples these are shown as lists but in operation you will recieve a linked list.

// Constraints:
// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

// ---------------------- My Solution ----------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if (head == null || head.next == null) {
        return head 
    }
   
   let node = new ListNode(null, head)
       let first = head
       let second = head.next
       let secondNext = second.next
       head = second
   

   while(first != null && second != null) {
       
       second.next = first 
       node.next = second 
       first.next = secondNext 
       node = first
       first = secondNext
       
       if (first == null) {
           break
       }
       else {
           second = first.next
       }

       if (second == null) {
           break
       }else 
       {
           secondNext = second.next
       }

     

   }

    return head

};