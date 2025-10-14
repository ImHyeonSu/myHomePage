---
sidebar_position: 16
---

# javascript_16

**Last updated:** \_2025-09-29

## currying

- 複数の引数を受け取る関数を → 単一引数の関数の連続に変換する手法

###　長所

- 再利用性の向上
- 関数合成が簡単

###　短所

- 可読性の低下
- デバッグが困難
  - 中間ステップの追跡が複雑
  - エラー発生時にどの段階か把握しにくい

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(2)(3); // 5

const addTwo = add(2);
addTwo(3); // 5

// カリー化でフィルター関数を再利用
const isGreaterThan = (min) => (value) => value > min;

const greaterThan30 = isGreaterThan(30);
const greaterThan20 = isGreaterThan(20)
  [(10, 20, 30, 40)].filter(greaterThan30) // [40]
  [(10, 20, 30, 40)].filter(greaterThan20); // [30, 40]
```
