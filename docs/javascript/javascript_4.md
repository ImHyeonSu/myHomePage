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

## Hoisting

- JavaScript の場合は最初 Context を構築するとき、変数、関数を宣言しておく状況
  - var の場合宣言と初期化を全て行うので宣言文前で使える。ただ設定する値が入ってるわけではなく、ただ宣言されていることだけ→let,const は違う
  - function の場合も宣言と初期化が同時に行われる

## EventLoop

- 非同期処理をための概念
- 構成
  - CallStack
    - 関数を呼び出したら、このCallStackにたまる、JavaScriptは関数を必ず一個だけ処理するSingleThread言語
  - TaskQueue・CallbackQueue
    - 非同期CallBack関数がたまるところ、setTimeout,AJAX, EventリスナーのCallbackなどがここにほぞんされる
  - Microtask Queue
    - PromiseのCallbackがここに保存される、TaskQueue・CallbackQueueより優先される
  - WebAPI
    - ブラウザーから提供するAPIで、DOMの操作、AJAX、setTimeoutなどの非同期処理を処理する
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

