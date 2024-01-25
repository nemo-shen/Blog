/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 约等于从尾部遍历链表
  // 先走到链表的最后一个节点
  l1 = reverseList(l1);
  l2 = reverseList(l2);

  // 两个链表相加
  let dummy = new ListNode();
  let cur = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    if (l1) carry += l1.val;
    if (l2) carry += l2.val;
    cur = cur.next = new ListNode(carry % 10);
    carry = Math.floor(carry / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  // 最后反转链表
  return reverseList(dummy.next);
};

/**
 * O    -> 1   -> 2 -> 3 -> 4
 * prev = null
 * curr = 1
 * next = curr.next === 2
 *
 * prev = 1 -> O // 这是翻转后的链表
 * curr = 2 // 第一次的next变成了curr
 * next = 3
 */
var reverseList = (head) => {
  let prev = null;
  let curr = head; // head 的开始节点就是 1
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
// @lc code=end
