// You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.

// Return a list that contains the maximum element in the window at each step.

// Example 1:

// Input: nums = [1,2,1,0,4,2,6], k = 3

// Output: [2,2,4,4,6]

// Explanation:
// Window position            Max
// ---------------           -----
// [1  2  1] 0  4  2  6        2
//  1 [2  1  0] 4  2  6        2
//  1  2 [1  0  4] 2  6        4
//  1  2  1 [0  4  2] 6        4
//  1  2  1  0 [4  2  6]       6
// Constraints:

// 1 <= nums.length <= 100,000
// -10,000 <= nums[i] <= 10,000
// 1 <= k <= nums.length

// ______________________________ My Solution O(n) Time _____________________________________
// this solution uses a monotonic decreasing queue. [8,7,4,2...]

// a fixed-size sliding window of length k moves forward through nums.

// the queue keeps track of the index positions of the numbers in the
// sliding window from maximum to lowest. We store index positions,
// but compare the actual numbers using nums[i].
// Example: nums = [2,1,3] -> queue stores the indexes [2,1]
// because nums[2] = 3 is the maximum and nums[1] = 1 is smaller.

// go through each element in the sliding window and add it to the
// monotonic queue. Before adding the current element, remove every
// element from the back of the queue (.pop()) whose value is less than
// the current element. Once we reach a bigger element, we stop and
// push the current index into the queue.

// any time the right pointer moves forward to a new number, we start
// removing elements from the right which are less than that number,
// and continue until we reach a bigger number or the logical end
// of the queue. Then we push the new index.

// the queue always keeps the largest value at its logical front,
// so queue[queueFirstPointer] gives us the maximum of the window.

// everytime the left pointer moves forward, we check whether the index
// at the logical head of the queue has gone out of the window.
// If it has, we simply move the head pointer ahead by one.

// note: we can't use .unshift() or .shift() because they can take O(n)
// time by shifting every other element in the array. Instead, we use
// queueFirstPointer to move the logical head of the queue in O(1).



function maxSlidingWindow(nums: number[], k: number): number[] {
        let l = 0; 
        let r = k-1; 
        let queue = []; 
        let queueFirstPointer = 0; 
        let resultArray = []; 
    
        
        for (let i = l; i<=r; i++) {
            if (queue.length == 0) {
                queue.push(i)
            }
            else {
                while (nums[i] >= nums[queue[queue.length-1]]) {
                       queue.pop()
                       if (queue.length-1 == queueFirstPointer-1) {
                        break;
                       }
                }
                queue.push(i);
            }
        }
       
        while(r < nums.length) {
             //remove out of bounds elements 
             while (queueFirstPointer < queue.length && l > queue[queueFirstPointer]) {
                queueFirstPointer++; 
             }

             //add new elements 
              while (queue.length > queueFirstPointer && nums[r] >= nums[queue[queue.length-1]]) {
                        queue.pop()
                    
                }
                queue.push(r);

              //push to result array 
               resultArray.push(nums[queue[queueFirstPointer]])

               //increment (move the sliding window)
                l++; 
                r++; 
        }
             
        
        return resultArray
};