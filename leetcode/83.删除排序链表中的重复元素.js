/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  let cur = dummy;
  let set = new Set();
  while (head) {
    console.log(set.has(head.val), dummy.next)
    if (!set.has(head.val)) {
      set.add(head.val)
      cur.next = head; // 当前的head节点是cur的下一个节点
      head = head.next; // head继续遍历
      cur = cur.next; // cur继续遍历
    } else {
      head = head.next;
      cur.next = head
    }
  }
  return dummy.next;
};
// @lc code=end
