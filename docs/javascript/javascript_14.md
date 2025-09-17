---
sidebar_position: 14
---

# javascript_14

**Last updated:** \_2025-09-18

## npm 依存関係の 3 つのタイプ

1. dependencies（本番依存関係）

- 本番環境でも必要なパッケージ
- 例：react、express、axios など
- アプリケーション実行に必須
- npm install --production で設置される

2.  devDependencies（開発依存関係）

- 開発時のみ必要なパッケージ
- 例：webpack、eslint、jest など
- ビルド、テスト、コード品質チェック用
- 本番環境では不要

3. peerDependencies（ピア依存関係）

- 主にライブラリ開発時に使用
- 重複インストールを防ぐ
- 使用者側で提供すべきパッケージを指定

```json
{
  "dependencies": {
    "react": "^18.0.0", // 本番で必要
    "express": "^4.18.0"
  },
  "devDependencies": {
    "webpack": "^5.88.0", // 開発時のみ
    "eslint": "^8.45.0"
  },
  "peerDependencies": {
    "react": ">=16.8.0" // 互換性指定
  }
}
```

```bash
# 全ての依存関係をインストール（開発環境）
npm install

# dependenciesのみ（本番環境）
npm install --production
# または
NODE_ENV=production npm install

# devDependenciesのみ
npm install --only=dev
```
