// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// ---------------------- My Solution ----------------------------------

var mergeTwoLists = function(list1, list2) {
    function Node(val, next) {
        this.val = (val === undefined? 0 : val) 
        this.next = (next === undefined? null : next)
        }
 
    let newListHead = new Node()
    let newListPointer = newListHead
    let list1Pointer = list1
    let list2Pointer = list2
 
    if (list1Pointer == null && list2Pointer == null) {
        newListHead = null
    }
 
    while(list1Pointer != null || list2Pointer != null) {
        if (list1Pointer == null) {
            newListPointer.val = list2Pointer.val
            list2Pointer = list2Pointer.next
        }
        else if (list2Pointer == null) {
            newListPointer.val = list1Pointer.val
            list1Pointer = list1Pointer.next
        }
        else {
            if (list1Pointer.val < list2Pointer.val) {
             newListPointer.val = list1Pointer.val
             list1Pointer = list1Pointer.next
            }
            else {
                newListPointer.val = list2Pointer.val
                list2Pointer = list2Pointer.next
                
            }
        }
      
      if (list1Pointer != null || list2Pointer != null){
          newListPointer.next = new Node()
          newListPointer = newListPointer.next
      }
     
 
    }
 
     return newListHead
 
 };