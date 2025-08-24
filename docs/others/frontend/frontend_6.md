---
sidebar_position: 6
---

# front_end_6

**Last updated:** _2025-08-16_

## BFF(Backend For Frontend)

- クライアントがバックエンド API を呼び出す時に問題の開所のためプロントエンドに手伝い用のサーバーを設けること
- MSA(Microservices Architecture)環境のいろんな API からもらった情報を組み合わせたり、架空するために活用
- プラットフォーム（スマホ、パソコンなど）に合わせた情報をもらうために活用

### 問題とは？

- API キーの認証、情報管理
  - front のコード上で API のキーなどを持たせずに BEF サーバーに置いといて見せないようにする
- CORS 問題

```javascript
app.get("/bff/external-data", async (req, res) => {
  const externalData = await fetch("https://external-api.com/data");

  res.json(externalData);
});

// ✅ クライアントは同じドメインんのBEFよびだし
async function fetchExternalAPI() {
  const response = await fetch("/bff/external-data");
}
```

## タブナビング攻撃

- ユーザーがリンクをクリック → 新しいタブ
- 元のタブに戻る
- 元のタブがフィッシングサイトに変更されている！

### 防ぐための書き方

1.  rel="noopener"

- 新しいタブから window.opener で元のページを操作できなくする ƒ

2.  rel="noreferrer"

- URL に含まれるセッション ID 等の情報を送信しない

3.  rel="nofollow"

- 検索エンジンにリンクを追跡させない

```html
<!-- 広告・ユーザー生成コンテンツ -->
<a href="広告URL" target="_blank" rel="noopener noreferrer nofollow">
  広告リンク
</a>

<!-- 一般的な外部リンク -->
<a href="外部URL" target="_blank" rel="noopener noreferrer"> 外部サイト </a>
```
