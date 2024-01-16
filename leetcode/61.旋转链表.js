/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) return head

  // 计算链表长度
  let n = 1
  let tmp = head
  while (tmp.next) {
    tmp = tmp.next
    n++
  }

  // k % n 是最后还剩下的需要旋转的次数，n > k % n
  // k 为 n 都倍数时，旋转后是本身，因此不需要处理
  let remain = n - k % n
  if (remain === n) {
    return head
  }

  // 变成环形链表
  tmp.next = head
  while (remain) {
    tmp = tmp.next
    remain--
  }

  const res = tmp.next
  // 断开环型链表
  tmp.next = null

  return res
};
// @lc code=end

