---
sidebar_position: 6
---

# python_6

**Last updated:** _2023-08-06_

### split

```python
s = "Hello, my name is John"
segments = s.split()
print(segments)  # output: ['Hello,', 'my', 'name', 'is', 'John']

s = "apple,banana,orange"
segments = s.split(',')
print(segments)  # output: ['apple', 'banana', 'orange']
```

### string to int

```python
binary_string = "101"
decimal_number = int(binary_string, 2)
print(decimal_number)  # output: 5
```

### sort

```python
arr.sort()
arr.sort(reverse=True)

sorted_arr = sorted(arr)
sorted_arr = sorted(arr, reverse=True)
```

### heap

- 2 進 tree の形の構図を持っている。
- 親ノードは子ノードよりも小さいか等しい構造を持ちます。つまり、ルートノードは常に最も小さい値を持つことになる。
- K 番目に大きい値や K 番目に小さい値を保持する問題で非常に有用。
- K 個の要素だけを保持しながら、毎回最も小さい値や最も大きい値を効率的に取得できるため。

```python
import heapq

min_heap = []

heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 1)
heapq.heappush(min_heap, 4)
heapq.heappush(min_heap, 2)

print(min_heap)

smallest = heapq.heappop(min_heap)
print(smallest)
print(min_heap)  # [2, 3, 4]
```

### set

1. 重複が不可能

2. 順番が一定的ではない

3. object タイプ

4. set は変更可能であり、要素を追加したり削除したりすることができる。

5. set はハッシュテーブルを使用して内部的に要素を管理しているため、要素の検索が非常に高速。

```python
my_set = {1, 2, 3, 4, 5}

# errorになる
try:
    my_set.remove(6)
except KeyError:
    print("KeyError")

# errorにならない
my_set.discard(6)
print(my_set)  # output: {1, 4, 5}
```
