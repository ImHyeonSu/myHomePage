---
sidebar_position: 6
---

# react_6

**Last updated:** _2025-04-29_

## React の Index を Key にしない理由

- 動的な配列の Index を Key にしたら、値が変わったりしててバグが起きる可能性が高い
- 静的な配列の場合は大丈夫

## useEffect

- コンポーネントの特定時点で呼び出される Hook
  - mount, 設定データの update、unmount(return の設定必要)

```javascript
useEffect(() => {
  console.log("mount");
  const intervalId = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => {
    console.log("unmount");
    clearInterval(intervalId);
  };
}, []);
```

## useEffect, useLayoutEffect

- useEffect は Rendering 完了後、非同期的に実行される
  - 画面が描画されたあと実行される
  - 大体な場合、API を実行結果で画面に変化をさせたい場合などで使われている
- useLayoutEffect は Rendering 後、DOM がアップデートされる前に同期的に実行される。
  - 画面が描画される前実行が終わる
  - レイアウト、DOM のサイズなどの変更に最適
- 何でもかんでも useLayoutEffect にしてしまうと同期的に実行されるので、useEffect と useLayoutEffect を適切に組み合わせて使った方がいい

## startTransition, useDeferredValue

- reactの並行モードのために追加された機能
- 昔のreactは一回レンダーされたら処理を全部終わらせないといけなかったが並行モードの導入によって、タスクを少し停めたりすることができる

#### startTransition
- 優先順位が低いセットを後ろにする機能

#### useDeferredValue
- 値の更新をわざとディレイすること

```javascript
// startTransition
startTransition(() => {
  setQuery(input);
});

// useDeferredValue
const deferredValue = useDeferredValue(input);


```
