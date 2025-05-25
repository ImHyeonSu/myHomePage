---
sidebar_position: 8
---

# javascript_8

**Last updated:** _2025-05-21

## typeとinterface
### type
- objectを拡張することに良い
- 結果的に一つのinterfaceに結合される
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
- interfaceみたく重複で宣言ができない
- typeは本当に形だけを持っている
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