---
sidebar_position: 10
---

# javascript_10

**Last updated:** \_2025-07-22

## this

1. global 呼出

- global から呼び出すと、global object を参照する。

```javascript
function globalFunc() {
  console.log(this);
}
globalFunc(); // ブラウザー: window, Node.js: global
```

2. method 呼出

```javascript
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};
obj.greet(); // "Alice"
```

3. コンストラクタ関数、クラス

```javascript
function Person(name) {
  this.name = name;
}
const person = new Person("Alice");
console.log(person.name); // "Alice"
```

4. 名刺的なバインド

- call(), apply(), bind() メソッドで名刺的に this を使える。

```javascript
function greet() {
  console.log(this.name);
}
const user = { name: "Alice" };
greet.call(user); // "Alice"
```

5. Arrow function 
- thisを持ってない、上位スコープのthisをもらう
```javascript
const obj = {
  name: "Alice",
  greet: () => console.log(this.name),
};

obj.greet(); // undefined (global `this`)
```

6. Domイベントハンドラ
```javascript
button.addEventListener("click", function () {
  console.log(this); // クリックされた button 
});
```ƒ