---
sidebar_position: 9
---

# javascript_9

**Last updated:** \_2025-07-14

## パラメータ渡し方式

1. a (文字列)

- プリミティブ型 → 値自体がコピーされる
- 関数内の変更が元に影響しない
- 結果: 'a unchanged' (変更なし)

2. b (オブジェクト - 再代入)

- オブジェクト → 参照値がコピーされる
- b = {...} 新しいオブジェクト代入 → コピーの参照のみ変更
- 元のオブジェクトはそのまま維持
- 結果: {b: 'unchanged'} (変更なし)

3. c (オブジェクト - プロパティ変更)

- オブジェクト → 参照値がコピーされる
- c.c = ... 同じオブジェクトのプロパティ変更
- 元とコピーが同じオブジェクトを指す
- 結果: {c: 'changed'} (変更あり)

```javascript
// プリミティブ型: 値コピー → 元は不変
// オブジェクト再代入: 参照コピー → 元は不変
// オブジェクトプロパティ変更: 参照コピー → 元も変更
function change(a, b, c) {
  a = "a changed";
  b = { b: "changed" };
  c.c = "changed";
}

let a = "a unchanged";
let b = { b: "unchanged" };
let c = { c: "unchanged" };

change(a, b, c);

console.log(a, b, c); // "a unchanged" {b: 'unchanged'} {c: 'changed'}
```
