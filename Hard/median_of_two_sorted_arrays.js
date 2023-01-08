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
 

// ---------------------- My Solution ----------------------------------

var findMedianSortedArrays = function(nums1, nums2) {
    let joinedArray = [...nums1, ...nums2]

    let joinedArraySorted = joinedArray.sort((a,z) => a-z)

    if (joinedArraySorted.length % 2 == 1) {
        return joinedArraySorted[Math.ceil((joinedArraySorted.length - 1)/2)]
    }else 
    {
         let center1 = joinedArraySorted[Math.ceil((joinedArraySorted.length - 1)/2)]
         let center2 = joinedArraySorted[Math.floor((joinedArraySorted.length - 1)/2)]
         return (center1+center2)/2
    }

};