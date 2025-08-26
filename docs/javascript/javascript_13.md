---
sidebar_position: 13
---

# javascript_13

**Last updated:** \_2025-08-26

## never

- 何も発生しないという、空いてる値を意味する
- 何も返せないということを名刺的に表現

```javascript
function throwError(message: string): never {
  throw new Error(message);
}
```

## unknown
- なんの値かがわからないという意味
- 外部APIからどんなタイプをもらうのかなどがわかんない時、ランタイムでタイプが決まる時に使われる。
```javascript
function processUnknownValue(value: unknown) {
    if (typeof value === 'string') {
      //
    } else if (typeof value === 'number') {
      //
    } else {
      //
    }
}
```