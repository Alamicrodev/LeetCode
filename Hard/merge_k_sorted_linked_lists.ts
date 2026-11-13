// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.
 

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []
 

// Constraints:
// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

// ---------------------- My Solution ----------------------------------

class ListNode {
      val  : number
      next : ListNode | null 

     constructor(val = 0, next = null) {
          this.val = val;
          this.next = next;
      }
  }

function mergeLists(listA: ListNode | null, listB: ListNode | null) {
       let dummyH = new ListNode()
       let pA = listA
       let pB = listB 
       let pR = dummyH

       while (pA != null && pB != null) {
           if (pA.val <= pB.val) {
               pR.next = pA; 
               pA = pA.next;
               pR = pR.next; 
           }
           else {
               pR.next = pB; 
               pB = pB.next; 
               pR = pR.next;  
           }
       }

       if (pA == null) {
           pR.next = pB
       }
       else 
       {
          pR.next = pA
       }
       
       return dummyH.next; 

    }


function mergeKLists(lists: ListNode[]): ListNode {
        if (lists.length === 0) {
            return null;
        }

        if (lists.length == 1) {
            return lists[0]
        }
       
        
        const mid = Math.floor(lists.length / 2);
        const left = mergeKLists(lists.slice(0, mid));
        const right = mergeKLists(lists.slice(mid));
        
       
        return mergeLists(left, right);

    }
