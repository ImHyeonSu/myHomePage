---
sidebar_position: 10
---

# front_end_10

**Last updated:** _2025-10-15_

## イテラブル（Iterable）とイテレータ（Iterator）

### イテラブル

- Symbol.iterator メソッドを持つオブジェクト。「反復可能なオブジェクト」

```javascript
// 配列はイテラブル
const fruits = ["りんご", "バナナ", "みかん"];

// for...of で反復可能
for (const fruit of fruits) {
  console.log(fruit);
}

// スプレッド演算子も使用可能
const fruitsCopy = [...fruits];
```

### イテレータと

- next()メソッドを持つオブジェクト。「実際に反復を実行するオブジェクト」

```javascript
// イテレータを取得
const iterator = fruits[Symbol.iterator]();

// next()メソッドで順番に値を取得
console.log(iterator.next()); // { value: 'りんご', done: false }
console.log(iterator.next()); // { value: 'バナナ', done: false }
console.log(iterator.next()); // { value: 'みかん', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

```javascript
// イテラブルは何度も使える
const arr = [1, 2, 3];
for (const n of arr) {
  /* 1回目 */
}
for (const n of arr) {
  /* 2回目も可能 */
}

// イテレータは一度だけ
const iter = arr[Symbol.iterator]();
for (const n of iter) {
  /* 使用 */
}
for (const n of iter) {
  /* 空 - すでに消費済み */
}
```
