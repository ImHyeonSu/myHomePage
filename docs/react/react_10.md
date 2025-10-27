---
sidebar_position: 10
---

# react_10

**Last updated:** _2025-07-14_

## Next.js Server Action

- サーバーで実行され、ブラウザから呼び出し可能な非同期関数（"use server"ディレクティブ使用）
- 別途バックエンド API 不要、Next サーバーで DB に直接アクセス、サーバーロジックがクライアントに送信されな(セキュリティ ↑)

### 短所

1. 更新の不透明性

- 何がいつどのように更新されるか不明確
- キャッシュ無効化タイミングが曖昧
- 他のページ・コンポーネントへの影響が予測困難

2. デバッグの困難さ

- サーバー側エラーの追跡が難しい
- 明示的な revalidatePath()や revalidateTag()が必要
- 状態管理の複雑化

3. 制御の制限

- 細かい更新制御が困難
- 従来の API + 状態管理ライブラリより柔軟性が低い
- リアルタイム更新には別途対応が必要

```javascript
// サーバーアクション定義
"use server";
export async function createReviewAction(data: FormData) {
  const content = data.get("content");
  // データベース作業
}

// コンポーネントで使用
<form action={createReviewAction}>
  <textarea name="content" required />
  <button type="submit">Submit</button>
</form>;
```

## バッチング

- 複数の状態更新を一つの再レンダリングにまとめて処理する最適化技術

```jsx
function handleClick() {
  setCount((c) => c + 1); // 状態更新1
  setFlag((f) => !f); // 状態更新2
  setName("React"); // 状態更新3
  // 🎯 3つの更新 → 1回だけ再レンダリング！
}

// React 17 - setTimeoutでバッチングなし
setTimeout(() => {
  setCount(1); // レンダリング1回目
  setFlag(true); // レンダリング2回目（合計2回！）
}, 1000);

// React 18 - 自動バッチング適用
setTimeout(() => {
  setCount(1); //
  setFlag(true); // 一度に処理（合計1回！）
}, 1000);

// バッチング無効化（必要な場合）
import { flushSync } from "react-dom";

flushSync(() => {
  setCount(1); // すぐにレンダリング
});
flushSync(() => {
  setFlag(true); // 別途すぐにレンダリング
});
```
