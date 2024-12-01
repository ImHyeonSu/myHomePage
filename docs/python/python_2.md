---
sidebar_position: 2
---

# python_2

**Last updated:** _2023-02-24_

## Count

```python
# リスト内の要素を数える。
LIST.count(ELEMENT)

numbers = [1, 2, 3, 2, 4, 2]
print(numbers.count(2))

# 文字列の要素を数える。
STRING.count(ELEMENT)

word = "Hello World"
print(word.count("l"))
```

## found

```python
list = ['apple', 'melon', 'grape', 'kiwi']
found = list.index('melon')
print(found)
# print: 1
```

## shift

```python
number = 5          # ２進数: 0000 0101
shifted = number << 1  # ２進数: 0000 1010
print(shifted)  # output: 10

number = 10         # ２進数: 0000 1010
shifted = number >> 1  # ２進数: 0000 0101
print(shifted)  # output: 5

# number << 3は number * 8
```

## list

```python
>>> a = [1, 3 , 5, 7]
>>> a[0]
1
>>> a[3]
7
>>> a = [1, 3 , 5, 7]
>>> a[4]
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  IndexError: list index out of range

>>> b =[]
>>> b.append(5)
>>> b.append(1.4)
>>> b
[5, 1.4]
```
