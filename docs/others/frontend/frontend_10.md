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

## Generator

- function\*で定義する特殊な関数
- 実行を途中で停止し、後で再開可能
- yield で値を一つずつ返す

```javascript
function* myGenerator() {
  console.log("1回目の実行");
  yield 1; // ここで一時停止

  console.log("2回目の実行");
  yield 2; // ここで一時停止

  console.log("3回目の実行");
  yield 3;
}

const gen = myGenerator(); // すぐ実行されず、イテレータを返す

gen.next(); // '1回目の実行' → {value: 1, done: false}
gen.next(); // '2回目の実行' → {value: 2, done: false}
gen.next(); // '3回目の実行' → {value: 3, done: false}
gen.next(); // {value: undefined, done: true}
```
