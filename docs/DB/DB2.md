---
sidebar_position: 2
---

# DB_2

**Last updated:** _2025-08-27_

## Paging Query の必要性

- 膨大なデータを一気に読み取ろうとすると以下のところで負担がかかる
  - メモリ：数百万件のデータを一気に読み取ろうとするとメモリエラーなどにかかる可能性がある
  - ネットワーク：ネットワークを通じて大容量のデータを送信することは時間がかかる
  - データベースの負担：膨大なデータの DB 読み取りなど
- また早い初期ロード、タイムアウトを防ぐためなどのためにも Paging 処理は必須

###　 Offset

- 実際のデータ 10,010 この row データを読み取った後、最初の 10,000 個は捨てて残り 10 個を返す仕組み

```sql
-- OFFSET 10000の場合
SELECT * FROM users
ORDER BY id
LIMIT 10 OFFSET 10000;
```

###　 Cursor-based Pagination

- ページの位置に関係なく、一定のパフォーマンスを保証
- 新しいデータが追加されても、重複や欠落が発生しない
- 追加の考慮事項
  - インデックス設計：(deleted_at, id) 複合インデックスが必須
  - ソートの一貫性：ORDER BY 句のカラム順序とインデックスの順序を一致させる必要
  - 逆方向のページング：前のページに移動するには、別途のロジックが必要

```sql
-- 最初のページ
SELECT * FROM subscribe
WHERE deleted_at >= '2024-01-01'
  AND deleted_at < '2024-02-01'
ORDER BY deleted_at, id
LIMIT 10;

-- 次のページ（より簡潔な方法）
SELECT * FROM subscribe
WHERE deleted_at >= '2024-01-01'
  AND deleted_at < '2024-02-01'
  AND (deleted_at, id) > ('2024-01-01 00:00:00', 78)  -- Row Constructor使用
ORDER BY deleted_at, id
LIMIT 10;
```
