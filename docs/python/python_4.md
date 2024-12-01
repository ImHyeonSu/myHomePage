---
sidebar_position: 4
---

# python_4

**Last updated:** _2023-07-16_

### list に変換

```python
result = 1234
result_list = list(map(int, str(result)))

print(result_list)  # output: [1, 2, 3, 4]

・str(result)は文字列に変換
・map(int, str(result)): 文字列の各桁をint型に変換
・list(map(int, str(result))): 整数をlistに格納
```

### 三項演算子

```python
bit_sum = int(a[i]) + carry if len(a) > len(b) else int(b[i]) + carry

・pythonの三項演算子は　int(a[i]) + carry　最初にTrueの実行コードがあってifを書いてその後elseで Falseの実行コードを書く
```

### **init**関数

- クラスの初期化メソッド、クラスのインスタンスが生成される時自動で呼び出される。
- メソッドの第一パラメータは必ず self をもらう。
- init メソッドは return がない。

### self

- self はクラスのインスタンス、self を使ってクラスの内部からインスタンスの変数とメソッドに接近できる。

```python
class MyClass:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

person = MyClass("Alice", 30)
person.greet()  # output: Hello, my name is Alice and I am 30 years old.
```

### 2 進数変換

```python
binaryNum = format(n, 'b')
return binaryNum
# -> bは２進数を意味する。

n = 5
binary_num = format(n, '08b')
print(binary_num)  # output: 00000101
# 1ではない部分を0埋めして、８桁まで

n = 15
binary_num = format(n, '016b')
print(binary_num)  # output: 0000000000011111
# 16桁まで

n = -10
binary_num = format((1 << 8) + n, '08b')  # 8bit
print(binary_num)  # output: 11110110

```

### formatter

1. {}を入れて formatter を入れる位置指定
2. : を入れてスタト視点を示す

```python
方指定
#d - 10進数 (Decimal)
#f - 少数 (Floating-point)
#s - 文字列 (String)
#b - 2進数 (Binary)
#x - 16進数 (Hexadecimal)
#o - 8進数 (Octal)
print("{:10d}".format(number))
number ="{:d}".format(123) → "123"
number = "{:.2f}".format(3.14159) → "3.14"
number = "{:5d}".format(42) → " 42"
number = {:05d}".format(42) → "00042"
```

### 文字数カウント

```python
text = "hello world"
char_to_count = 'l'

count = text.count(char_to_count)
# -> 3
```
