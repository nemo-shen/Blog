/*
 * @lc app=leetcode.cn id=1721 lang=javascript
 *
 * [1721] 交换链表中的节点
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
var swapNodes = function (head, k) {
  let cur = head
  for (let i = 0; i < k - 1; i++) {
    cur = cur.next
  }
  let first = cur;
  let second = head;
  while (cur.next) {
    cur = cur.next
    second = second.next
  }
  [first.val, second.val] = [second.val, first.val]
  return head
};
// @lc code=end
