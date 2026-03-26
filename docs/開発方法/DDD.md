---
sidebar_position: 1
---

# DDD

**Last updated:** _2026-03-26_

# DDD (Domain-Driven Design / ドメイン駆動設計)

## 一言で言うと

> **データ（ドメイン）が先、APIはその次。ルールは、そのルールが属するオブジェクトの中にあるべき。**

---

## 核心的な考え方

| 思考方法   | 問い                                               |
| ---------- | -------------------------------------------------- |
| ❌ API中心 | 「このリクエストが来たら何をすべきか？」           |
| ✅ DDD     | 「このデータはどんな性質を持ち、何ができるのか？」 |

---

## 主要概念

- **ドメイン** : システムが解決しようとする業務領域
- **Entity** : 固有IDを持つオブジェクト（例：Policy、User）
- **Value Object** : IDを持たず、値そのものが意味を持つオブジェクト（例：Money、Address）
- **Repository** : DBアクセスを抽象化するインターフェース
- **集約（Aggregate）** : 整合性を一緒に保つべきオブジェクトのまとまり
- **ユビキタス言語** : エンジニアとビジネス側が共通で使う言語

---

## 構造

```
[ サービス層 ]     フローのみ調整（取得 → 処理 → 保存）
      ↓
[ ドメイン層 ]     ルールを所有（ここが核心）
      ↓
[ インフラ層 ]     実際のDB実装
```

---

## コードで見る違い

```go
// ❌ ルールがサービス層に散らばる
func CancelPolicy(id int) error {
    policy := db.Find(id)
    if policy.Status != "active" { // このルールが各所にコピペされる
        return errors.New("キャンセル不可")
    }
    policy.Status = "cancelled"
    db.Save(policy)
    return nil
}

// ✅ ルールはドメインオブジェクトが所有
func (p *Policy) Cancel() error {
    if p.status != StatusActive {
        return errors.New("キャンセル不可")
    }
    p.status = StatusCancelled
    return nil
}

// サービスはフローのみ
func (s *Service) CancelPolicy(id int) error {
    policy, _ := s.repo.FindByID(id)
    return policy.Cancel() // ルールを気にしなくてよい
}
```

---

## いつ使うべきか

| 状況                                     | 適否 |
| ---------------------------------------- | ---- |
| 複雑なビジネスロジックを持つSaaS         | ✅   |
| ドメインエキスパートと継続的に協業できる | ✅   |
| 仮説検証を優先するスタートアップ         | ❌   |
| チームの一部しか理解していない状態       | ❌   |
