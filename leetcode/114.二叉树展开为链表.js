/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const list = []
  function dfs(root) {
    if (root) {
      list.push(root)
      dfs(root.left, list)
      dfs(root.right, list)
    }
  }
  dfs(root)
  const size = list.length
  for (let i = 1; i < size; i++) {
    const pre = list[i-1]
    const cur = list[i]
    pre.left = null
    pre.right = cur
  }
};
// @lc code=end
