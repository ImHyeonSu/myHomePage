---
sidebar_position: 4
---

# javascript_4

**Last updated:** _2025-04-13_

## Context

- コードが実行される環境

  - コード実行時点で使える変数、関数、Object、this キーワードの対象決定

- 全駅 Context

  - JavaScript が初めて実行されるときに生成される Context、プログラムが終了されるときまで続ける
  - ブラウザーは Window、Node.js からは Global が Context になる

- 関数実行 Context

  - 関数が呼ばれるたびに生成される Context

- Context の構図

  - Variable Environment

    - 変数と関数を保存するところ

  - This Binding

    - 実行 Context を意味する。関数が呼ばれた方式によって違う Object を参照

  - Scope チェイン

    - 現在 Context から変数がみつからない場合、上位の Context に探しに行くための連結を言う

## function

- javascript では function を値のように使える

```javascript
const sayHello = function () {
  return "Hello";
};
console.log(sayHello()); // 'Hello'

const executeFunction = function (fn) {
  return fn();
};
console.log(executeFunction(sayHello)); // 'Hello'
```

## arrow function

- 関数表現式のため、変数または他の関数の引数として渡される、だから一般的なメソッドを宣言することとは違う

```javascript
function add(a, b) {
  return a + b;
}
const add = (a, b) => a + b;

function square(x) {
  return x * x;
}

const square = (x) => x * x;

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((x) => x * x);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

## closer

- 外部関数内で定義された内部関数で、外部関数の変数にアクセスできる関数。
- そして外部関数の実行が終了した後も、外部関数の変数にアクセスできる。これがクロージャの中心的な概念。

```javascript
function outer() {
  const outerVar = "I am outer!";

  return function inner() {
    return outerVar; // 外部変数に接近可能
  };
}
const innerFunction = outer();
console.log(innerFunction()); // 'I am outer!'
```

## Hoisting

- JavaScript の場合は最初 Context を構築するとき、変数、関数を宣言しておく状況
  - var の場合宣言と初期化を全て行うので宣言文前で使える。ただ設定する値が入ってるわけではなく、ただ宣言されていることだけ →let,const は違う
  - function の場合も宣言と初期化が同時に行われる
    - function は宣言前から使える

```javascript
console.log(declaredFunction()); // 'Declared Function'
function declaredFunction() {
  return "Declared Function";
}

// 関数のようには使うためには宣言後じゃないと使えない
const expressedFunction = function () {
  return "Expressed Function";
};
console.log(expressedFunction()); // 'Expressed Function'
```
### Hoistingが可能な理由
- JavasScriptでは、コードを実行する時、Compileと実行二つの段階がある
- Compile段階でもうすでにvar、functionを宣言しておく
- 実行段階で値を格納する

## EventLoop

- 非同期処理をための概念
- 構成
  - CallStack
    - 関数を呼び出したら、この CallStack にたまる、JavaScript は関数を必ず一個だけ処理する SingleThread 言語
  - TaskQueue・CallbackQueue
    - 非同期 CallBack 関数がたまるところ、setTimeout,AJAX, Event リスナーの Callback などがここにほぞんされる
  - Microtask Queue
    - Promise の Callback がここに保存される、TaskQueue・CallbackQueue より優先される
  - WebAPI
    - ブラウザーから提供する API で、DOM の操作、AJAX、setTimeout などの非同期処理を処理する

```javascript
console.log('start');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('end');
>
start
end
Promise callback
setTimeout callback
```
