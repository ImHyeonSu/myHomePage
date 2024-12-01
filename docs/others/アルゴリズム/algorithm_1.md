---
sidebar_position: 1
---

# algorithm_1

**Last updated:** _2024-09-26_

# 2024.09.26

## スライディングウィンドウ(Sliding Window)

- 配列やリストなどの連続したデータにおいて、固定されたサイズの区間を移動させながら効率的に問題を解決する方法

- 重複した計算を避けながら区間の情報を維持し、新しいデータを追加し古いデータを削除することで最適化を行う。

```python
nums = [1, 2, 3, 4, 5]
k = 3
# 全ての部分配列の合計を計算
max_sum = float('-inf')
for i in range(len(nums) - k + 1):
    current_sum = sum(nums[i:i+k])
    max_sum = max(max_sum, current_sum)
print(max_sum)  # 出力: 12 (3 + 4 + 5)
```

## Kadane's Algorithm

```python
# 例: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

def kadane(arr):
    current_sum = max_sum = arr[0]

    for num in arr[1:]:
        # 現在の値(num)|今までの合計値(current_sum) + 現在の値(num)
        current_sum = max(num, current_sum + num)
        # 全体の値の更新
        max_sum = max(max_sum, current_sum)

    return max_sum
```
