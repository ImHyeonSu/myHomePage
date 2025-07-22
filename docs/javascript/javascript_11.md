---
sidebar_position: 11
---

# javascript_11

**Last updated:** \_2025-07-22

## Type Assertion

- コンパイラに特定の値がどんなタイプかを教えること
- as を利用する、これによりコンパイラを無視するようになる
- 大体、API な外部ライブラリからの Return タイプを知っている時、コンパイラの警告を避けるために使う
  - runtime エラーが出る可能性もあるので、注意するべき

```javascript
const element = document.getElementById("myElement") as HTMLDivElement;

element.style.backgroundColor = "blue";
```

###　　 narrowing

- Type Assertion より安全に活用できる

```javascript
function printLength(value: string | string[]) {
  if (Array.isArray(value)) {
    console.log(value.length); // 配列
  } else {
    // 文字列
  }
}
```

###　 type predicate

```javascript
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
    pet.swim();
}
```
