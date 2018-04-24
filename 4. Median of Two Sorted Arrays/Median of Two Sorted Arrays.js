/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = []
    arr = arr.concat(nums1)
    arr = arr.concat(nums2)
    arr = arr.sort((a,b) => {return a - b})
    if (arr.length % 2 == 0){
        return (arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2) - 1])/2
    }else {
        return arr[Math.floor(arr.length/2)]
    }
};

console.log(findMedianSortedArrays([1, 2],[3,4]))