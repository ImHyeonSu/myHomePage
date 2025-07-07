---
sidebar_position: 1
---

# AWS lambda

**Last updated:** _2025-07-08_

- アプリケーションで使用する機密情報を安全に保存・管理してくれるサービス
  - データベースパスワード
  - API キー（決済、メール、地図サービスなど）
  - JWT トークンシークレット
  - 外部サービス認証情報
- セキュリティ: 暗号化されて保存・転送される
- 集中管理: すべての機密情報を一箇所で管理
- アクセス制御: 誰がどの情報にアクセスできるかを細かく制御
- ローテーション: パスワードを自動的に定期変更
- 監査: 誰がいつどの情報にアクセスしたかを記録

```javascript
// ❌ コードに直接ハードコーディング（非常に危険）
const dbPassword = "super_secret_password";

// ❌ 環境変数（まだ漏洩リスクあり）
const apiKey = process.env.STRIPE_API_KEY;

// ✅ 安全な方式
const dbPassword = await secretManager.getSecret("database-password");
```
