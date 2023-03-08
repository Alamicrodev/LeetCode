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

// ---------------------- My Solution ----------------------------------

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var removeNthFromEnd = function(head, n) {
    let pointer = head
    let nodesList = []

    
    while (true){
        nodesList.push(pointer)
        if (pointer.next != null) {
           pointer = pointer.next
        }
        else {
            break
        }
    }

      
    let nodeIndextoRemove = nodesList.length-n 

    let PreviousNode = nodesList[nodeIndextoRemove-1] 
    let NextNode = nodesList[nodeIndextoRemove+1]

    if (PreviousNode) {
        if (NextNode) {
            PreviousNode.next = NextNode
        }
        else {
            PreviousNode.next = null
        }
    }
    else {
        if (NextNode) {
            head = NextNode
        }
        else {
            head = null
        }
    }

    
    return head


};