---
sidebar_position: 3
---

# python_3

**Last updated:** _2023-03-04_

### in 関数

```python
>>> jb = {1,2,3}
>>> 1 in jb
True
>>> 4 in jb
False

>>> jb.index(2)
1

>>> jb.count(3)
1

>>> 以下のように文字列自体が入っているのかどうかを確認できる
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle in haystack:
            return haystack.find(needle)
        else:
            return -1


a = Solution()
# haystack = "leetcode", needle = "leeto" -> この場合は-1が出る
print(a.strStr("sadbutsad", "sad"))
```

### convert

```python
>>> jb = 12
>>> str_jb = str(jb)
->"12"
>>> jb = "12"
>>> str_jb = int(jb)
->12
```

### sum

```python
sum(iterable)

list = [10, 22, 19, 2, 9, 3]
sum_list = sum(list)
print(sum_list) #65

tuple = (10, 22, 19, 2, 9, 3)
sum_tuple = sum(tuple)
print(sum_tuple) #65

dict = {'a': 1, 'b': 2, 'c': 3}
sum_dict = sum(dict.values())
print(sum_dict) #65


sum(iterable, start)

list = [10, 22, 19, 2, 9, 3]
sum_list = sum(list, 1000)
print(sum_list) # 1065

```

### strip

- (space), (tab, \t), (newline, \n), (carriage return, \r), (form feed, \f), (vertical tab, \v) などが文字列のスタト、エンドポイントにあれば削除してくれる。

```python
s = "   Hello, World!   "
print(s.strip())
# Hello, World!


s = "###Hello, World!###"
print(s.strip("#"))
# Hello, World!
```
