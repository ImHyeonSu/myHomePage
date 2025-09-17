---
sidebar_position: 4
---

# tree

**Last updated:** _2025-09-16_

## tree

- 方向が決まっているグラフの一種類
- 他のデータ構図を作るのに活用される、Heap、Binary Search Tree
- in-order traversal: 左の子ノード → 親ノード → 右の子ノードの順
- pre-order traversal: 親ノード → 左の子ノード → 右の子ノードの順
- post-order traversal: 左の子ノード → 右の子ノード → 親ノードの順
- breadth-first traversal / level-order traversal: 根ノードから始めて、同じ深さ（レベル）のノードをすべて探索、次の深さのノードを順番に探索

```
        1                --- level 1
      /   \
    2       3            --- level 2
   / \     / \
  4   5   6   7          --- level 3

```
