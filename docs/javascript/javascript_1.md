---
sidebar_position: 1
---

# javascript_1

**Last updated:** _2024-01-07_

## const, let, var

- const
  - 再代入不可、定数（定数）宣言する時使用
- let
  - 再代入可能、変数宣言
- var
  - var は宣言する前に変数に接近ができる、再代入可能だけど使わないほうがいい

## template literal

- ``を使用する、中に表現式とかを許容してくれるのは

```javascript
var a = 20;
var b = 8;
var c = "javascript";
var str = "私は " + (a + b) + "歳で " + c + "が好きです。";
console.log(str);

let a = 20;
let b = 8;
let c = "ジャバスクリプト";
let str = `私は ${a + b}歳で ${c}が好きです`;
console.log(str);
```

## json parse

- JSON 文字列を JavaScript object に変換してくれる

```javascript
const jsonString = '{"name":John, "age":30}';
const parsedObject = JSON.parse(jsonString);
```

- JavaScript object を JSON に変換してくれる

```javascript
const jsObject = { name: "John", age: 30 };
const jsonString = JSON.stringfy(jsObject);
```

## enum
- 値の不変性（Immutability）
```javascript
// Objectは値が変更可能です
const UserType = {
    ADMIN: 'ADMIN',
    USER: 'USER'
};
UserType.ADMIN = 'CHANGED';  // 変更可能
UserType.NEW = 'NEW';       // 新しい値の追加も可能

// Enumとして使用する場合は値を変更できません
const UserTypeEnum = Object.freeze({
    ADMIN: 'ADMIN',
    USER: 'USER'
});
UserTypeEnum.ADMIN = 'CHANGED';  // エラー
UserTypeEnum.NEW = 'NEW';       // エラー
```
- 値の有効性検証
```javascript
// Objectの場合、どのような値でも使用できてしまいます
const Status = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE'
};
let Status = 'ANYTHING';  // 問題なく動作してしまう

// Enumの場合、定義された値のみを使用するよう制限できます
const StatusEnum = Object.freeze({
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    isValid(status) {
        return Object.values(this).includes(status);
    }
});
if (!StatusEnum.isValid('ANYTHING')) {
    throw new Error('無効なステータス値です');
}
```