---
sidebar_position: 3
---

# back_end_3

**Last updated:** _2025-06-06_

## REST (Representational State Transfer)

### 説明

1. クライアント・サーバー分離: クライアントとサーバー間の役割を明確に分離
2. ステートレス性: サーバーはクライアントの状態を保存せず、各リクエストを独立して処理
3. 統一インターフェース: 固有の URI でリソースを識別し、統一されたインターフェースを通じてクライアントとサーバーが簡単で予測可能な通信を行える
4. キャッシュ可能性: 可能な場合、サーバーの応答時間改善のためリソースキャッシングをサポート

- 資源を URL で表現する、HTTP メソッドで資源に対した行動を定義する
  - 資源のやり取りなどをすると理解すればいい
- サーバーとクライアントの役割を分理してくれる。
- REST の場合やりとりは JSON メッセージのフォーマット

```
(Resource) + (HTTP Method) + (Representation)

例:
GET /users/123        → user 123 取得
POST /users           → 新しいuser生成
PUT /users/123        → user 123 修正
DELETE /users/123     → user 123 削除
```

###　 Header

- データのメタ情報が入ってある、データに大したコンテキスト情報を含んである、つまりデータをどう処理すればいいかを提供すること
- Content-Type, Authorization, Cache-Control など
- サイズは一般的に 8KB-16KB

#### Content-Type

- Content-Type ヘッダーは MIME タイプを基盤とし、type/subtype 形式
  - JSON データ：application/json
  - HTML 文書：text/html
  - ファイルアップロード：multipart/form-data
  - フォームデータ：application/x-www-form-urlencoded

###　 URL Parameter (Path Parameter)

- URL のパースにパラメータを直接格納
- GET から主に使う
- 更新系でも使う場合があるが、URL で見せてしまうのでセキュリティ的に適切ではない

```javascript
GET / users / 123 / posts / 456;
GET / products / laptop / reviews / 789;
GET / companies / google / employees / john;
```

### Query Parameter

- URL の後ろに？をつけること
- GET、DELETE
  - DELETE から QueryParameter を使用する理由は GET と同じパターンでデータを更新しに行くための一貫性を持たせるため

```javascript
GET /users?page=1&limit=10&sort=name

GET /products?category=laptop&price_min=500&price_max=2000
GET /posts?author=john&tag=javascript&published=true
GET /users?search=kim&role=admin&active=true
```

### Request Body

- 更新系の API で情報をやり取りする方法、GET では使えない

```
┌─────────────────────────────────┐
│ Request Line: POST /users HTTP/1.1  │
├─────────────────────────────────┤
│ Headers:                        │
│ Content-Type: application/json  │
│ Content-Length: 45              │
├─────────────────────────────────┤
│ Request Body:                   │ ← ここ!
│ {                              │
│   "name": "なまえ",             │
│   "email": "hong@example.com"   │
│ }                              │
└─────────────────────────────────┘
```
