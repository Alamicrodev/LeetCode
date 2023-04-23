// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Note: The examples shows it as an array but you will receive a linked list head pointer only.
 

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// ---------------------- My Solution (Two Pointer Algorithm) ----------------------------------

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var removeNthFromEnd = function(head, n) {
    
    if (head == null) {
        return null
    }

    let listLength = 1 
    let pointer = head

    while (pointer.next != null) {
        pointer = pointer.next
        listLength++; 
    }


    let nodeCounter = 1
    let assasin = head
    let police = head 

    while(listLength+1 - nodeCounter != n) {
        police = assasin 
        assasin = assasin.next
        nodeCounter++
    }

   if (police == assasin) {
       head = head.next
       return head
   }
   else {
      police.next = assasin.next
   }
    
    return head
    
};


