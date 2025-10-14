---
sidebar_position: 9
---

# front_end_9

**Last updated:** _2025-10-14_

## Node.js

- Chrome V8 JavaScript を基盤にするサーバーサイドランタイム環境
- singleThread なので、一つの Thread で全ての処理を行う
- 非同期処理が終わることを CallBack で管理して、待たないまま進む
- 実際の I/O 作業はバックの Worker で処理
- NPM(Node Package Manager)

```javascript
// ファイルRead
fs.readFile("data.txt", (err, data) => {
  // 完了時、ログ
  console.log(data);
});
console.log("次の作業"); // ファイルReadを待たずに進む
```

## Cookie, Session, LocalStorage

### Cookie

- サーバーとクライアントの間で共有する小さなデータ
- サーバーがクライアントに「保存を命令」してクライアント側に保存されている情報
- 4kb 制限、ブラウザー閉じっても維持、満了日設定可能
- 全ての HTTP 呼び出しに含まれる
- ブラウザーを閉じっても維持される
- テーマの設定、最近みた商品など

### Session

- サーバーメモリに保存されるクライアントユーザーの情報
- クライアントは SessionID を Cookie で持っている
- ブラウザー閉じると削除
- ログイン情報、権限、認証

### LocalStorage

- データを永久的に保存する
- ブラウザーに保存して、HTTP 送信などには使わない
- 5~10MB 制限
- 臨時的な保存データなど

## Cross-Site Scripting(XSS)

- ウェブサイトに悪いスクリプトを入れてブラウザーから実行されるようにする攻撃
  - クッキ取得、セッション取得などがある

###　 Stored XSS

- 悪いスクリプトをサーバーに保存され、他のユーザーが該当するページに入った場合実行される

### Reflected XSS

- URL パラメータなどで悪いスクリプトがサーバー側に届いて、サーバーの Response に含まれて実行される

### Dom XSS

- クライアントスクリプトが DOM を動的に操作するときに発生
