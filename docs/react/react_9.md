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
  - 問題としてすでにRenderされた部分に対してデータが変更されたことをクライアント側で受け取った場合、UIが崩れたりする場合が出てくる→Suspense、fallbackなどを利用する、Tanstack Queryなどを利用する

```javascript
renderToPipeableStream(<App />, {
  onShellReady() {
    res.setHeader("Content-Type", "text/html");
    stream.pipe(res);
  },
});
```
