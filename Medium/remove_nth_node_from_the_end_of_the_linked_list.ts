// Given the head of a linked list and an integer n, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4], n = 2
// Output: [1,2,4]

// Example 2:
// Input: head = [5], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 2
// Output: [2]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

//_________________________ My Solution ____________________________________
// Count the length of the linked list 
// Subtract n from length to get index of the node that needs to be removed. 
// if index == 0, move head forward, else 
// count upto (not including) that index. 
// stop at node before that index > move conection from .next till .next.next 

// 2nd method: use two pointer technique > L & R 
// L starts at dummynode(added before header)
// R pointer will off set by n+1 so if n = 2, R will start at node 2. 
// then both will start moving by 1 step each
// when R reaches the end(null), L will reach the node just before the node that needs to be removed. 


function removeNthFromEnd(head: ListNode | null, n: number): ListNode {
       
       if (head == null) {
        return head; 
       }
        
       
       let cur = head; 
       let length = 0; 

       while (cur != null) {
            cur = cur.next; 
            length++; 
       }

       let index = length - n; 

       if (index == 0) {
         head = head.next;
         return head; 
       }

       cur = head; 
       let count = 1; 

       while (count < index) {
        cur = cur.next; 
        count++;  
       }



       if (cur != null && cur.next != null) {
           cur.next = cur.next.next; 
       }


       return head; 

}
