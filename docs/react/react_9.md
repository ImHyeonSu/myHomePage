---
sidebar_position: 9
---

# react_9

**Last updated:** _2025-06-18_

## React の Server Component

- server から rendering されるコンポーネント
- 特定コンポーネントのみサーバーからアップデートしてもらえる
  - SSR なども結局ページ全体のアップデートになるので、時間がかかる
- 特徴
  - bundle のデカさが減る：bundle などのロードがない
  - セキュリティー強化：データベースなどに直接アクセスできる(API が不要)
  - useEffect,useState を使えない
  - Client ロード時の Bundle に含まれない
  - 静的コンテンツ
- SSR との差分
  - SSR はどうしてもすべてのコンポーネント(ページ)を Server で作成して Client で実行される
  - Server Component は個別の Component が Server から実行されて、その実行結果までサーバーで処理して Client には渡すだけになる

## Streaming SSR

- サーバーから完成された HTML を送信することではなく、準備されてる部分からストリーミングしてクライアントに送信する記述
- データが準備される次第 HTML をストリーム形式で送信してクライアントは送信された HTML を Rendering する。
- 特徴
  - 初期ロード時間を減らせる
  - 問題としてすでに Render された部分に対してデータが変更されたことをクライアント側で受け取った場合、UI が崩れたりする場合が出てくる →Suspense、fallback などを利用する、Tanstack Query などを利用する

```javascript
renderToPipeableStream(<App />, {
  onShellReady() {
    res.setHeader("Content-Type", "text/html");
    stream.pipe(res);
  },
});
```

## Virtual DOM

- メモリから事前に計算して必要な部分だけ修正して実際の画面に反映するやり方
  - 状態変更 → Virtual DOM 新規生成
  - 比較(Diffing) → 前 vs 新しい Virtual DOM の差分検出
  - 最小アップデート → 変更された部分のみ実際の DOM に適用

```javascript
// ブラウザの実際のDOM操作
const element = document.getElementById("myDiv");
element.style.color = "red"; // 🐌 遅い - ブラウザレンダリング発生
element.innerHTML = "Hello World"; // 🐌 遅い - レイアウト再計算
element.appendChild(newElement); // 🐌 遅い - リフロー/リペイント

// JavaScriptオブジェクトで表現されたVirtual DOM
const virtualElement = {
  type: "div",
  props: {
    id: "myDiv",
    style: { color: "red" },
    children: "Hello World",
  },
};
// ⚡ 高速 - メモリ上でのみ作業

// 🔄 Virtual DOM 動作プロセス
// 1. 状態変更
const [count, setCount] = useState(0);
setCount(1); // 状態変更！

// 2. 新しいVirtual DOM生成
const newVirtualDOM = {
  type: "div",
  props: { children: `Count: 1` }, // 新しい値
};

// 3. 前のVirtual DOMと比較 (Diffing)
const oldVirtualDOM = {
  type: "div",
  props: { children: `Count: 0` }, // 前の値
};

// 4. 差分計算
const diff = compare(oldVirtualDOM, newVirtualDOM);
// 結果: "children内容のみ変更"

// 5. 実際のDOMに最小限のみ適用
document.getElementById("count").textContent = "1"; // これだけ実行！
```
