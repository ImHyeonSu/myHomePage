---
sidebar_position: 1
---

# python_1

**Last updated:** _2023-12-17_

## trim

```python
s = '      abc        '
# s.lstrip()→左側だけ

# s.rstrip()→右側だけ

# s.strip()→左右全部
```

## for

```python
・for item in iterable:→loop可能なデータタイプは全部 iterableに入れる。

・for i in range(5):→range(start, end, step)
　　print(i)

・t = [1, 5, 7, 33, 39, 52]
　for p in enumerate(t): →loopを使う時何回目のloopかを確認する、i-v形式でindexとvalue両方取得可能
        print(p)
(0, 1)
(1, 5)
(2, 7)
(3, 33)
(4, 39)
(5, 52)
 for index, value in enumerate(t):
         print(index,value)
(0, 1)
(1, 5)
(2, 7)
(3, 33)
(4, 39)
(5, 52)
```

## square

```python
・2 ** 10 = 1024
・2 ** 11 = 2048
・pow(2, 10) = 1024
```

## number -> list

```python
num = 232443
line = list(map(int,str(num)))
print(line) # 	[2, 3, 2, 4, 4, 3]
```

## Ternary operators

```python
true value if logic else false value
```

## min, max

```python
max(a, b)
min(a, b)
```
