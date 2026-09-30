// You are given the head of a singly linked-list.

// The positions of a linked list of length = 7 for example, can intially be represented as:
// [0, 1, 2, 3, 4, 5, 6]

// Reorder the nodes of the linked list to be in the following order:
// [0, 6, 1, 5, 2, 4, 3]

// In the general case, label the nodes by their original zero-based positions from 0 to n - 1. After reordering, those original positions appear in this order:
// [0, n-1, 1, n-2, 2, n-3, ...]

// These numbers represent node positions, not the values stored in the nodes.

// You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.


// Example 1:
// Input: head = [2,4,6,8]
// Output: [2,8,4,6]

// Example 2:
// Input: head = [2,4,6,8,10]
// Output: [2,10,4,8,6]

// Constraints:
// 1 <= Length of the list <= 1000.
// 1 <= Node.val <= 1000

//You should aim for a solution with O(n) time and O(1) space, where n is the length of the given list.

//_________________ Solution __________________________________________
// brute force way: simply putting nodes in a list and then populating new order by getting from list through index positions
// BUT we need space complexity O(1): can't create a list 
// We solve this by reaching the center of the list, using floyd's[hare and tortoise] algorithm (slow/fast pointer). 
// break the link between two halves > reverse the 2nd half
// keep pointer at head of two halves. 
// go through each and create the new order. 


function reorderList(head: ListNode | null): void {
       
       if (head == null) {
          return 
       }

       //separate the two halves 
       let s = head;       //slowPointer 
       let f = head.next;  //fastPointer

       while (f != null && f.next != null) {
            s = s.next; 
            f = f.next.next; 
       }   

       //s is at the last node of the first half
       let halfListHead = s.next; 
       s.next = null;   //break connection 

       //reverse the 2nd half 
       let curr = halfListHead; 
       let prev = null 

       while (curr != null) {
         let next = curr.next; 
         curr.next = prev; 
         prev = curr; 
         curr = next; 
       } 
       

       //go through each  in new list  
       let a = head;
       let b = prev; 
       
       let pointer = new ListNode();
       let base = pointer; 

       while (a != null && b != null) {
           pointer.next = a;
           a = a.next; 
           pointer = pointer.next;  
           pointer.next = b; 
           b = b.next; 
           pointer = pointer.next
       }

       if (a != null) {
          pointer.next = a;
       }
       
       if (b != null) {
         pointer.next = b; 
       }
        
       
       head = base.next; 
}