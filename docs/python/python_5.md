---
sidebar_position: 5
---

# python_5

**Last updated:** _2023-07-18_


### list の reverse

```python
# メモリ使用率が一番低い(O(1))ただ、元に復元できない。
num_list = [1, 2, 3, 4, 5]
num_list.reverse()
print(num_list) # output: [5, 4, 3, 2, 1]

# メモリ使用率が少し低い
num_list = [1, 2, 3, 4, 5]
num_list = list(reversed(num_list))
print(num_list) # output: [5, 4, 3, 2, 1]

# メモリ使用率がO(n)
num_list = [1, 2, 3, 4, 5]
num_list = num_list[::-1]
print(num_list) # output: [5, 4, 3, 2, 1]
```

### list -> str

```python
char_list = ['H', 'e', 'l', 'l', 'o']

result = "".join(char_list) # Hello
# -------------------------------
str_list = ["Hello", "world", "this", "is", "Python"]

result = " ".join(str_list)
print(result)  # Hello world this is Python

```

### list del

```python
my_list = [1, 2, 3, 4, 5]

del my_list[2]
or
my_list.pop(2)
```

### string find or index

```python
string = "Hello, world!"
char = 'o'

index = string.find(char)
#-> ない場合　−１返却


string = "Hello, world!"
char = 'o'

try:
    index = string.index(char)
except ValueError:
#-> ない場合　ValueError返却

```

### count

```python
from collections import Counter

string = "banana"
counter = Counter(string)
print(counter) # Counter({'a': 3, 'n': 2, 'b': 1})

max_count = max(counter.values())
print(counter) # 3
```

### count 追加

```python
from collections import Counter

list1 = [1, 2, 3]
list2 = [1, 3, 2, 3]

counter1 = Counter(list1)
counter2 = Counter(list2)

difference = counter2 - counter1

added_value = list(difference.elements())

print(f" {added_value}")
```

### 2 の補数表現

```python
if num < 0:
    num += 2**32
```

