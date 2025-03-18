---
sidebar_position: 8
---

# python_8

**Last updated:** _2024-12-01_

### Closure

- 関数とその関数が参照する環境を含めて覚えてる object

- メモリ効率が良い
  - クラスを使用するよりも軽量
  - 必要な状態のみを保持
- カプセル化
  - データを外部から隠蔽
  - 状態の管理が容易
- 柔軟性
  - 動的な関数生成が可能
  - 設定の保持が簡単
- コードの整理
  - 関連する機能をまとめやすい
  - グローバル名前空間を汚染しない

```python
def create_validator(min_val, max_val):
    def validate(value):
        return min_val <= value <= max_val
    return validate

# Create different validators
age_validator = create_validator(0, 120)
score_validator = create_validator(0, 100)

print(age_validator(25))    # True
print(score_validator(150)) # False
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
