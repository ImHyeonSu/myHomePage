---
sidebar_position: 8
---

# python_8

**Last updated:** _2023-12-01_

### Closure

- 関数とその関数が参照する環境を含めて覚えてる object

```python
def outer_function(x):
    def inner_function(y):  # Closure
        return x + y        # 外部 変数 xを覚えて使用
    return inner_function

add_five = outer_function(5)
print(add_five(3))  # 8
```

### Anonymous Function

- 一回使ったら使えなくなる関数

```javascript
// JavaScript
button.addEventListener("click", function () {
  console.log("clicked");
});
```

```python
# python
add = lambda x, y: x + y
print(add(2, 3))  # 5

```
