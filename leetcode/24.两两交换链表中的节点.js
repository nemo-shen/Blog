/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
// var swapPairs = function (head) {
//   let dummy = new ListNode();
//   dummy.next = head;
//   let node0 = dummy;
//   let node1 = head;
//   while (node1 && node1.next) {
//     let node2 = node1.next;
//     let node3 = node2.next;

//     node0.next = node2;
//     node2.next = node1;
//     node1.next = node3;

//     node0 = node1;
//     node1 = node3;
//   }

//   return dummy.next;
// };

var swapPairs = function (head) {
  if (head === null || head.next === null) return head

  let node1 = head
  let node2 = head.next
  let node3 = node2.next

  node1.next = swapPairs(node3)
  node2.next = node1

  return node2
};
// @lc code=end
