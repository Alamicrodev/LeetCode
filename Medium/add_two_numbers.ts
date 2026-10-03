// You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

// The digits are stored in reverse order, e.g. the number 321 is represented as 1 -> 2 -> 3 -> in the linked list.

// Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the sum of the two numbers as a linked list.

// Example 1:
// Input: l1 = [1,2,3], l2 = [4,5,6]
// Output: [5,7,9]

// Explanation: 321 + 654 = 975.

// Example 2:
// Input: l1 = [9], l2 = [9]
// Output: [8,1]

// Constraints:
// 1 <= l1.length, l2.length <= 100.
// 0 <= Node.val <= 9

// Recommended Time & Space Complexity
// You should aim for a solution with O(m + n) time and O(1) space, where m is the length of list l1 and n is the length of list l2.

// ______________________________________ My Solution ________________________________________
// simple solution: add values in each node, because they are reversed  123 + 14  [321+41], its easy 
// easy because units(nodes) line up, 10s line up and so forth 
// keep track of the carry in each addition. 
// if carry exists in the end, add it with an additional node; 




function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {

           let cur1 = l1; 
           let cur2 = l2; 

           let carry = 0 
           let dummyHead = new ListNode()
           let prev = dummyHead; 

           while (cur1 != null || cur2 != null) {
                let sum = (cur1?.val ?? 0) + (cur2?.val ?? 0) + carry;
                carry = 0;  
                if (sum > 9) {
                    carry = 1;
                    sum = sum % 10;  
                }

                let node = new ListNode(); 
                node.val = sum; 
                node.next = null; 
                prev.next = node; 
                prev = node; 

                cur1 = cur1?.next ?? null; 
                cur2 = cur2?.next ?? null; 
           }

           //add last carry 
           if (carry != 0) {
              let node = new ListNode(); 
                node.val = carry; 
                node.next = null; 
                prev.next = node; 
           }

           return dummyHead.next
    }