// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.
// There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.
// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.
// Note: index is not given to you as a parameter.

// Example 1:
// Input: head = [1,2,3,4], index = 1

// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], index = -1

// Output: false
// Constraints:

// 0 <= Length of the list <= 1000.
// -1000 <= Node.val <= 1000
// index is -1 or a valid index in the linked list.


//______________________ Solution(Using HashSet) __________________
// Stores each node in a hashSet and at each node checks if it already exists in the set.
// if exists, cycle confirmed.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {

        if (head == null) {
            return false 
        } 
        
        

        let nodesSet = new Set<ListNode>; 
        let curr = head 
        
        while (curr != null) { 
           
            if (nodesSet.has(curr)) {
                return true
            }
            
            nodesSet.add(curr); 
            curr = curr.next; 

        }
         
        return false 
        
    }
}




//________________ Solution (Floyd's Alogrithm) _____________________
// uses a fast(2 steps per iteration) and slow(one step per iteration) pointer, 
// if there is a cycle, both pointers evntually meet at the same point. 


class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
   
        let s = head;  //slow 
        let f = head;  //fast

        while (f != null && f.next != null) {
            
            s = s.next
            f = f.next.next 

            if (s == f) {
                return true
            }
  
        }

        return false

    } 

}; 