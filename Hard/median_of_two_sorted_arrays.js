// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 
// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106
 

// ---------------------- My Solution (Breaks Time Complexity) ----------------------------------

// var findMedianSortedArrays = function(nums1, nums2) {
//     let joinedArray = [...nums1, ...nums2]

//     let joinedArraySorted = joinedArray.sort((a,z) => a-z)

//     if (joinedArraySorted.length % 2 == 1) {
//         return joinedArraySorted[Math.ceil((joinedArraySorted.length - 1)/2)]
//     }else 
//     {
//          let center1 = joinedArraySorted[Math.ceil((joinedArraySorted.length - 1)/2)]
//          let center2 = joinedArraySorted[Math.floor((joinedArraySorted.length - 1)/2)]
//          return (center1+center2)/2
//     }

// };

// ---------------------- My Solution (More Efficient) ----------------------------------

var findMedianSortedArrays = function(nums1, nums2) { 
    let totalIter = nums1.length + nums2.length - 1
    let nums1Copy = [...nums1]
    let nums2Copy = [...nums2]
    let joinedSortedArray = []
    let iterVar = 0 

    while (iterVar < totalIter) {
        if (nums1Copy.length == 0 || nums2Copy.length == 0) {
            break
        }
        if (nums1Copy[0] <= nums2Copy[0]){
            joinedSortedArray.push(nums1Copy.shift())
        }
        else {
             joinedSortedArray.push(nums2Copy.shift())
            }
     } 
    
     if (nums1Copy.length != 0) {
         for (let element of nums1Copy) {
                joinedSortedArray.push(element)
         } 
     }

     if (nums2Copy.length != 0) {
         for (let element of nums2Copy) {
                joinedSortedArray.push(element)
         } 
     }



    if (joinedSortedArray.length % 2 == 1) {
        return joinedSortedArray[Math.ceil((joinedSortedArray.length - 1)/2)]
    }else 
    {
         let center1 = joinedSortedArray[Math.ceil((joinedSortedArray.length - 1)/2)]
         let center2 = joinedSortedArray[Math.floor((joinedSortedArray.length - 1)/2)]
         return (center1+center2)/2
    }

};
