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

// function merges two sorted linked lists
// Note: Remember that whenever you have to merge two sorted linked lists its best to use a dummy. 
var mergeLinkedLists = function (l1,l2) {
    let dummy = new ListNode(null, null)
    let tail = dummy 
    
    while(l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        }
        else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next 
    }

    if (l1 != null) {
        tail.next = l1
    }
    if (l2 != null) {
        tail.next = l2
    }

    return dummy.next
}

// using merge sort 
var mergeKLists = function(lists) {
    
    if (lists.length == 0 || lists == null) {
        return null
    }

    while (lists.length > 1) {
        let mergedLists = []
         
         for (let i = 0; i<lists.length; i=i+2) {
             let l1 = lists[i]
             let l2 = (i+1 < lists.length)? lists[i+1]: null

             let result = mergeLinkedLists(l1,l2)
             mergedLists.push(result)
         }

         lists = mergedLists 
    }
   
   return lists[0]
};