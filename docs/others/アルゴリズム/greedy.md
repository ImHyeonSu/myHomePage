---
sidebar_position: 2
---

# Greedy

**Last updated:** _2025-04-13_

## 概要

- 各ステップで現在の状況において最も良く見える選択（局所的最適解）を行う方法

## 例

- 問題：500 円、100 円、50 円、10 円のコインがある場合、1,260 円のおつりを渡すために必要な最小コイン数を求めてください。

  - 最も大きい単位のコインから使用します。
  - 500 円コイン：1,260 ÷ 500 = 2 枚使用（残額：260 円）
  - 100 円コイン：260 ÷ 100 = 2 枚使用（残額：60 円）
  - 50 円コイン：60 ÷ 50 = 1 枚使用（残額：10 円）
  - 10 円コイン：10 ÷ 10 = 1 枚使用（残額：0 円）
  - -> 6 枚

- 問題２：

```python
"""
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: nums = [2,3,0,1,4]
Output: 2
"""
class Solution:
    def jump(self, nums: list[int]) -> int:
        n = len(nums)
        if n <= 1:
            return 0
        jumps = 0
        current_max_reach = 0
        next_max_reach = 0
        for idx in range(n - 1):
            next_max_reach = max(next_max_reach, nums[idx] + idx)
            if idx == current_max_reach:
                jumps += 1
                current_max_reach = next_max_reach
            if current_max_reach >= n - 1:
                break

        return jumps
```
