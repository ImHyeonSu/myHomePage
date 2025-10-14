---
sidebar_position: 3
---

# DB_3

**Last updated:** _2025-09-29_

## NOT IN Query

- NOT IN の場合テーブル全体に対して検索をかけに行くので効率的にではない

```sql
SELECT p
FROM Post p
WHERE p.id NOT IN :postIds
```

### NOT EXISTS

- 行単位でマーチングされたら s の結果を返す

```sql
SELECT p FROM Post p
WHERE NOT EXISTS (
    SELECT 1 FROM Post temp
    WHERE temp.id = p.id AND temp.id IN :postIds
)
```

### LEFT JOIN + IS NULL

```sql
SELECT p FROM Post p
LEFT JOIN (
    SELECT temp.id FROM Post temp WHERE temp.id IN :postIds
) filtered ON p.id = filtered.id
WHERE filtered.id IS NULL
```
