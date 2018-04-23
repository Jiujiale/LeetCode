/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/** reverse
var addTwoNumbers = function(l1, l2) {
    let res = Math.floor(l1.reverse().join('')) + Math.floor(l2.reverse().join(''))
    return `${res}`.split('').reverse()
};
*/
/** noreverse
var addTwoNumbers = function(l1, l2) {
    l1 = [...l1].map(l1.pop,l1)
    l2 = [...l2].map(l2.pop,l2)
    let res = Math.floor(l1.join('')) + Math.floor(l2.join(''))
    let _res = `${res}`.split('')
    return [..._res].map(_res.pop,_res)
};
 */

// 上面两种网页上怎么都失败。很神奇
var addTwoNumbers = function(l1, l2) {
    let res = 0;
    for (let i = l1.length - 1; i >= 0; i -- ){
        res +=  Math.pow(10,i) * (l1[i]  + l2[i])
    }
    let _res = `${res}`.split('')
    return [..._res].map(_res.pop,_res)
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))