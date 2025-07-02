---
sidebar_position: 7
---

# javascript_7

**Last updated:** \_2025-05-21

## type と interface

### interface

- object を拡張することに良い
- 結果的に一つの interface に結合される

```javaScript
interface Person {
  age: number;
  name: string;
  isBirthday: boolean;
}

interface Person {
  address: string;
}

const person1: Person = {
  age: 1,
  name: "abcd",
  isBirthday: false,
  address: "1010",
};
```

### type

- interface みたく重複で宣言ができない
- type は本当に形だけを持っている

```javaScript
type BasicInfo = {
  name: string;
  age: number;
};

type ContactInfo = {
  email: string;
  phone: string;
};

type PersonInfo = BasicInfo & ContactInfo;

const person2: PersonInfo = {
  name: "John",
  age: 30,
  email: "john@example.com",
  phone: "123-456-7890",
};
```

## null, undefined

### undefined

- JavaScript エンジンが自動的に割り当てる値
- 値が割り当てられていない状態
- メモリには実際に undefined という primitive 値が格納される
  - 「この変数に何か割り当てるべきだがまだしていない」という意味

### null

- 開発者が意図的に割り当てる値
- 意図的に空である」または「オブジェクト参照がない」ことを表す
- モリには null という特別な値が格納される
  - 「この変数はもうオブジェクトを参照しない」という明確なシグナル
