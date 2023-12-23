# 链表

## 定义

链表通常由一连串节点组成，每个节点通常由信息域和指针域组成，一个节点通过指针指向下一个节点，以此形成的链式结构即为链表，链表的最后一个节点指向空。

插入复杂度: O(1)
访问复杂度: O(n)

## 结构

1. 单向链表

```js
class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
```

2. 双向链表

```js
class ListNode {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
```

3. 循环链表

循环链表和单向链表的最大区别是在最后一个节点的时候，循环链表指向链表开头。

4. 其他: 块链表

## 常见操作

1. 从头开始遍历
2. 从尾开始遍历
3. 链表反转
4. 区间反转
5. 多区间反转
6. 判断链表是否有环
7. 虚拟节点
一般遍历链表的时候会增加虚拟节点，避免判断边界情况

```js
const dummy = new ListNode(-1);
```

## 常见用途

1. 内存管理，例如redis
2. LRU算法，例如vue的keep-alive
3. 在前端框架的 vnode 中我们也能看到链表的应用，例如 vue 采用的双向链表，react采用的3向链表

## 关联算法

LRU

## 参考资料

![picture 1](https://cdn.jsdelivr.net/gh/nemo-shen/Blog@img/b44eb1fa819ebc33741d1c9e48faab2c6a951d38b7324c84852310fcaa9bec47.png)
