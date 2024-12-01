---
sidebar_position: 7
---

# python_7

**Last updated:** _2023-10-13_

### HashMap

1. key-value の形
   - データの形は("apple", 1)のようになる
2. 利点
   - 高速な検索速度
     - 平均して O(1)の時間計算量でデータを検索できるため非常に高速です。
   - 柔軟なデータ構造
     - 様々なデータ型のキーと値を保存できます。

- ハッシュ関数: ハッシュマップは、キーをハッシュ関数に渡してハッシュ値を計算する。
- このハッシュ値は、データが格納されるインデックスを決定する。

### for else

```python
for i in range(5):
    if i == 3:
        break
else:
    print("Loop finished without break.")
```

### unicode

```python
ord('a')  # 97
ord('b')  # 98
```

### List Comprehension

```python
return_list = [[] for _ in matrix[0]]
return_list = [[] * len(matrix[0])]
```

### zip

1. iterable(list, tuple)などを一個にしてくれる。

```python
a = [1, 2, 3]
b = ['a', 'b', 'c']
print(list(zip(a, b)))
# output: [(1, 'a'), (2, 'b'), (3, 'c')]

keys = ['a', 'b', 'c']
values = [1, 2, 3]
my_dict = dict(zip(keys, values))
print(my_dict)  # {'a': 1, 'b': 2, 'c': 3}

matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

transposed = list(zip(*matrix))
print(transposed)
# [(1, 4, 7), (2, 5, 8), (3, 6, 9)]


questions = ['1+1=?', '2+2=?', '3+3=?']
answers = [2, 4, 6]
user_answers = [2, 3, 6]

for q, a, ua in zip(questions, answers, user_answers):
    if a == ua:
        print(f"{q} 正解!")
    else:
        print(f"{q} 誤解!")
# 結果:
# 1+1=? 正解!
# 2+2=? 誤解!
# 3+3=? 正解!

pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
numbers, letters = zip(*pairs)
print(numbers)  # (1, 2, 3)
print(letters)  # ('a', 'b', 'c')
```

### map

1. iterable(list, tuple)などの全ての要素を特定の関数を適用してくれる関数

- 計算を必要な時まで遅らせる方式
- 不必要な計算を最小限に抑え、パフォーマンスを向上
- メモリ使用量を削減
- 実際の変換結果は即座には生成されない
- 結果が必要になった時点で初めて計算される
- すべての結果をメモリに保持する必要がない
- 必要な部分だけを計算して処理できる

-> 結論はどっかに使う前まではデータが使用されない(以下のような結果がでる)

```python
- (print(map(square, numbers)) # <map at 0x107c6d670>)
- list(map(square, numbers)) # このようにしないと結果が確認できない
```

```python
# ・基本的な使い方
map(function, iterable)

#
numbers = [1, 2, 3, 4, 5]
str_numbers = map(str, numbers)
print(list(str_numbers))  # ['1', '2', '3', '4', '5']ï

#
strings = ['1', '2', '3', '4', '5']
numbers = map(int, strings)
print(list(numbers))  # [1, 2, 3, 4, 5]

#
numbers = [1, 2, 3, 4, 5]
squared = map(lambda x: x**2, numbers)
print(list(squared))  # [1, 4, 9, 16, 25]

#
list1 = [1, 2, 3]
list2 = [10, 20, 30]
summed = map(lambda x, y: x+y, list1, list2)
print(list(summed))  # [11, 22, 33]

#
def square(x):
    return x ** 2

numbers = [1, 2, 3, 4, 5]
squared = map(square, numbers)
print(list(squared))  # [1, 4, 9, 16, 25]

#
tmp_str = "1 2 3 4 5"
numbers = list(map(int, tmp_str.split()))
# numbers = [1, 2, 3, 4, 5]

#
numbers = [1, 2, 3, 4, 5]
mapped = map(str, numbers)

print(list(mapped))  # ['1', '2', '3', '4', '5']
print(list(mapped))  # [] (一回使ったら使えなくなる)

# ・再宣言が必要
mapped = map(str, numbers)

#
data = ['1,2,3', '4,5,6', '7,8,9']

processed = list(map(lambda x: list(map(int, x.split(','))), data))
print(processed)  # [[1,2,3], [4,5,6], [7,8,9]]

# ・一番indexが少ないデータを基準にして動く
list1 = [1, 2, 3, 4, 5]
list2 = [10, 20, 30]
list3 = [100, 200, 300, 400]

result = map(lambda x, y, z: x+y+z, list1, list2, list3)
print(list(result))  # [111, 222, 333]
```

### lambda 関数

1. 名前がない一回だけ使うための関数を作るやり方

- map,filter,reduce との一緒に使う場合
- 簡単な一回用の関数が必要な場合

```python
# 普通な関数
def add(x, y):
    return x + y

# 同じだけどlambda関数
add = lambda x, y: x + y



# listのsort
students = [
    {'name': 'Alice', 'score': 90},
    {'name': 'Bob', 'score': 85},
    {'name': 'Charlie', 'score': 95}
]

# scoreを基準にする
students.sort(key=lambda x: x['score'])

# mapとの使い方
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# filterとの使い方
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6]

#reduceとの使い方
>>> from functools import reduce   # python 3の場合
>>> reduce(lambda x, y: x + y, [0, 1, 2, 3, 4])
# 10
>>> reduce(lambda x, y: y + x, 'abcde')
# 'edcba'
```

```python
import sys
import time
from memory_profiler import profile

# 1. 関数のデカさ
def regular_square(x):
    return x ** 2

lambda_square = lambda x: x ** 2

print(f"normal: {sys.getsizeof(regular_square)} bytes")
print(f"lambda: {sys.getsizeof(lambda_square)} bytes")

# 2. 時間とメモリ
@profile
def process_regular():
    numbers = range(1000000)
    def square(x): return x**2
    result = list(map(square, numbers))
    return result

@profile
def process_lambda():
    numbers = range(1000000)
    result = list(map(lambda x: x**2, numbers))
    return result

# 時間(cluade3.5sonnetの実行履歴)
print("\n時間:")
start = time.time()
process_regular()
print(f"normal: {time.time() - start:.4f}초")

start = time.time()
process_lambda()
print(f"lambda: {time.time() - start:.4f}초")


normal: 136 bytes
lambda: 104 bytes

時間:
Line #    Mem usage    Increment  Line Contents
================================================
     8     15.7 MiB     15.7 MiB    @profile
     9                             def process_regular():
    10     15.7 MiB      0.0 MiB        numbers = range(1000000)
    11     15.7 MiB      0.0 MiB        def square(x): return x**2
    12     31.2 MiB     15.5 MiB        result = list(map(square, numbers))
    13     31.2 MiB      0.0 MiB        return result
normal: 0.2341초

Line #    Mem usage    Increment  Line Contents
================================================
    15     15.7 MiB     15.7 MiB    @profile
    16                             def process_lambda():
    17     15.7 MiB      0.0 MiB        numbers = range(1000000)
    18     31.1 MiB     15.4 MiB        result = list(map(lambda x: x**2, numbers))
    19     31.1 MiB      0.0 MiB        return result
lambda: 0.2156초
```

->これを見ると時間とか容量がそこまで差はない、だけど簡単に一回だけ使いたい場合には lambda が効率的だと判断。

### dict, setdefault

```python
# get() vs setdefault()
d = {"a": 1}

# get()
print(d.get("b", 2))  # 2
print(d)  # {"a": 1}

# setdefault()
print(d.setdefault("b", 2))  # 2
print(d)  # {"a": 1, "b": 2}
```
