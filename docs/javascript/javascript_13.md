---
sidebar_position: 13
---

# javascript_13

**Last updated:** \_2025-09-17

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
- 外部 API からどんなタイプをもらうのかなどがわかんない時、ランタイムでタイプが決まる時に使われる。

```javascript
function processUnknownValue(value: unknown) {
  if (typeof value === "string") {
    //
  } else if (typeof value === "number") {
    //
  } else {
    //
  }
}
```

## satisfies

- 既存のタイプ情報を維持しながら、該当するタイプの条件を満たしているのかを確認する。

```typescript
type Color = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const palette: Record<Color, string | RGB> = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
};

// ⚠️ error　→ 実際にRGBの可能性もあるのでエラーになる
const greenNormalized = palette.green.toUpperCase();
```

```typescript
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Color, string | RGB>;

// ✅ errorにならない
const greenNormalized = palette.green.toUpperCase();
```
