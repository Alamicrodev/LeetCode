// You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.

// There is exactly one repeated integer in nums, and every other integer appears at most once.

// Return the repeated integer.

// Example 1:
// Input: nums = [1,2,3,2,2]
// Output: 2

// Example 2:
// Input: nums = [1,2,3,4,4]
// Output: 4


// Follow-up: Can you solve the problem without modifying the array nums and using O(1) extra space?

// Constraints:
// 1 <= n <= 10,000
// nums.length == n + 1
// 1 <= nums[i] <= n

// Topics
// Recommended Time & Space Complexity
// You should aim for a solution with O(n) time and O(1) space without modifying the input array, where n is the size of the input array.

// ________________________________________ My solution ____________________________________________________________
        // first, let's focus on the constraints: 
        //length: n+1
        //num[x] = [1,n] 
        //since each number is between 1-n 
        //we can assume each number is a pointer, to some other index position in the array. 
        //if they are pointers > they are basically a linked list 
        //so reapeated number: index position with multiple pointers to it. 
        // [1,2,3,2,2]  multiple pointers are pointing to node value  3(index position 2). 
        // they are creating a cycle, 3 -> 2 -> 3  and so on. 
        // using tortise and hare algorithm(floyd's) algorithm, we can find a point inside the circle. 
        //simply checkout this video to understand the solution: 
        //https://youtu.be/wjYnzkAhcNk?si=FyLjkQ5JMdBWOOrE




function findDuplicate(nums: number[]): number {

        let slow = 0; 
        let fast = 0; 

        while (true) {
            slow = nums[slow]
            fast = nums[nums[fast]]

            if (slow == fast) {
                break; 
            }
        }

        let slow2 = 0; 

        while(true) {
            slow = nums[slow]
            slow2 = nums[slow2]

            if (slow == slow2) {
                return slow
            }
        }
    }