// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]


// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// ---------------------- My Solution ----------------------------------

// constructor for a node object
function Node(val) {
    this.val = val 
    this.next = null
}

// constructor for a linkedlist such that every new insertion is in the head 
function LinkedList() {
    this.head = null 
    this.insert = function(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node; 
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }
}


var addTwoNumbers = function(l1, l2) {

    // array1 and 2 will store the values from the two linked lists 
    let array1 = []
    let array2 = []
    let output = new LinkedList()

    // recursive function that transfers elements from linked list to given array
    function loop(node, array) {
        array.push(node.val)
        if (node.next){
            loop(node.next, array) 
        }
        return
    }
    loop(l1, array1)
    loop(l2, array2)

    // data arrived in reverse
    array1.reverse()
    array2.reverse()

    //We convert arrays to nums and add them and then back to an array, which will be reverse
    let sumArray = String(BigInt(array1.join("")) + BigInt(array2.join(""))).split("").reverse()

    // as long as there is any element in the array we keep removing and adding them to the output linkedlist.
    while(sumArray.length) {
        output.insert(sumArray.pop())
    }

    
    return output.head
};