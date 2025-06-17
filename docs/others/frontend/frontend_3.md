---
sidebar_position: 3
---

# front_end_3

**Last updated:** _2024-06-12_

## localStorage, sessionStorage
- ブラウザーが提供するクライアントの保存先
- データをkey-valueで保存
- localStorage
    - 永久的にデータを保存、同じドメインのすべてのタブでデータを共有
- sessionStorage
    - データが現在のセッションだけで維持される
    - タブごとで共有されない
- セキュリティー
    - トークンの情報などはStorageに保存したら他人に取られる可能性もある(javascriptコードでのトークン取得APIなどを実装して奪う可能性など)
    - HTTP-Onlyなどでトークンん情報を管理
        - API送信の時自動送信、サーバーからトークンのセッション管理