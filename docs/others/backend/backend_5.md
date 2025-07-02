---
sidebar_position: 5
---

# back_end_5

**Last updated:** _2025-06-22_

## Hash Data Set

- key,value のもつ DataSet
- キーを使って O(1)時間複雑度で値を検索

### ハッシュ衝突（Hash Collision）

```python
def simple_hash(key, table_size):
    """簡単なハッシュ関数"""
    hash_value = 0
    for char in key:
        hash_value += ord(char)  # 文字をASCII値に変換
    return hash_value % table_size

# 例
print(simple_hash("CAT", 10))  # 4
print(simple_hash("DOG", 10))  # 6

# ハッシュ衝突
print(simple_hash("CAT", 10))  # 4
print(simple_hash("TAC", 10))  # 4 ← 衝突！
```

### 線形探査法（Linear Probing）

- 衝突時に他の空きバケットを探す
- 選ぶ理由
  - キャッシュ性能を重視
  - メモリ使用量を抑えたい
  - 均等な分散が期待できる

```python
class LinearProbing:
    def __init__(self, size=10):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size

    def put(self, key, value):
        index = hash(key) % self.size

        # 空きスロットまたは同じキーを探す
        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.values[index] = value  # 更新
                return
            index = (index + 1) % self.size  # 次のスロットへ

        self.keys[index] = key
        self.values[index] = value

# 探査順序: index → index+1 → index+2 → ...
```

### 二次探査法（Quadratic Probing）

- 選ぶ理由
  - 1 次クラスタリングを回避したい
  - 線形探査法より良い分散を求める

```python
class QuadraticProbing:
    def __init__(self, size=11):  # 素数サイズ推奨
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size

    def put(self, key, value):
        index = hash(key) % self.size
        i = 0

        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.values[index] = value
                return
            i += 1
            index = (hash(key) % self.size + i * i) % self.size

        self.keys[index] = key
        self.values[index] = value
# 探査順序: index → index+1² → index+2² → index+3² → ...
```

### ダブルハッシュ法（Double Hashing）

- 選ぶ理由
  - 最高の性能を求める
  - 複雑な実装が許容できる
  - 高いロードファクターでも動作させたい

```python
class DoubleHashing:
    def __init__(self, size=11):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size

    def _hash1(self, key):
        """第1ハッシュ関数"""
        return hash(key) % self.size

    def _hash2(self, key):
        """第2ハッシュ関数（ステップサイズ決定）"""
        return 7 - (hash(key) % 7)

    def put(self, key, value):
        index = self._hash1(key)
        step = self._hash2(key)

        while self.keys[index] is not None:
            if self.keys[index] == key:
                self.values[index] = value
                return
            index = (index + step) % self.size

        self.keys[index] = key
        self.values[index] = value

# 探査順序: hash1(key) → hash1(key)+hash2(key) → hash1(key)+2*hash2(key) → ...
```
