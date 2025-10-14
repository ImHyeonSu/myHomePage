---
sidebar_position: 8
---

# front_end_8

**Last updated:** _2025-09-18_

## Storybook

- UI コンポーネントの開発・文書化ツール
- コンポーネントを独立した環境で開発・テスト可能
- プリケーション全体を起動せずに個別コンポーネントの確認が可能
- 特定の状態でのコンポーネントレンダリングを定義
  - 例：ボタンコンポーネント
  - 通常状態の Story
  - 無効化状態の Story
  - ローディング状態の Story
- 長所
  - コンポーネントを分離して開発
  - 独立したテスト環境
  - 開発生産性の向上
- 短所
  - Storybook 設定と維持管理の手間
  - 大規模プロジェクトでは多数の Story ファイル管理が負担
  - 特定ライブラリとの互換性問題の可能性
  - サーバー連携コンポーネントには Mock データ設定が必要

## JSON Schema

- JSON データがどんな形であるべきか、ルールを定めた文書
- 定義を利用して、APIとの通信データの整合性をチェック
```
{
  "username": "田中太郎",
  "email": "tanaka@email.com",
  "password": "1234567"
}

{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",      // usernameは文字列でなければならない
      "minLength": 3         // 最小3文字以上
    },
    "email": {
      "type": "string",      // emailは文字列
      "format": "email"      // メール形式でなければならない
    },
    "password": {
      "type": "string",      // passwordは文字列
      "minLength": 6         // 最小6文字以上
    }
  },
  "required": ["username", "email", "password"],  // 全て必須！
  "additionalProperties": false  // 他のプロパティは許可しない
}
```

```
// バックエンドから来たデータ
const userData = {
  username: "田",  // ❌ 3文字未満！
  email: "間違ったメール",  // ❌ メール形式じゃない！
  // passwordなし！ ❌
};

// JSON Schemaで検証
validateWithSchema(userData, userSchema);
// 結果：「エラー！usernameは3文字以上、email形式が間違い、password必須」
```
