---
sidebar_position: 8
---

# back_end_8

**Last updated:** _2025-07-01_

##　 トランザクショナルアウトボックスパターン

- 複数の独立したシステムが一つの作業を処理する際、すべてのシステムが成功するか失敗するべきなのに一部だけ成功する問題の対応策
- 高速レスポンス: 他システムを待たずに即座に成功応答
- 障害分離: 一つのシステム障害が他システムに影響なし
- リトライ: 失敗した作業は後で再試行
- 拡張性: 新システム追加時に既存コード変更不要

```
ユーザーが注文 → 5つのシステムがそれぞれ処理する必要

1. 注文サービス: 注文保存 ✅
2. 在庫サービス: 在庫減算 ❌ (障害発生)
3. 決済サービス: 決済処理 ⏳ (まだ実行されず)
4. 通知サービス: メール送信 ⏳ (まだ実行されず)
5. 分析サービス: データ収集 ⏳ (まだ実行されず)

結果: 注文は保存されたが在庫減算失敗 → データ不整合! 💥
```

```go
func CreateOrder() {
    tx.Begin()

    // 実際のデータ保存
    tx.Save(&Order{...})

    // 他システムに送る「やることリスト」保存
    tx.Save(&OutboxEvent{Type: "order.created"})

    tx.Commit() // ここまで成功すればOK!
}

// 別プロセスがイベント発行
// バックグラウンドで実行
func ProcessOutboxEvents() {
    events := getUnpublishedEvents()

    for event := range events {
        // Kafka/RabbitMQ等に送信
        publishToMessageBroker(event)
        markAsPublished(event)
    }
}
```
