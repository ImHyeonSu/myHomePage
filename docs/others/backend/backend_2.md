---
sidebar_position: 2
---

# back_end_2

**Last updated:** _2025-06-04_

## DB Replication
- 大規模のシステムなどでデータの安全性と可溶性のためにデータベースのコピーを設けてデータベスの動機化をすること
- Binary Log(データベースの変更の全てを記録しているファイル)をReplicaサーバーに複製して本サーバーとの一貫性を持たせること
    - Statement-Based(SBR)
        - Sql文自体を保存する
        - ファイルサイズは相対的にRBRより少ない
        - SELECT NOWなど既存で使ってたそのままのSQLが同じ結果で保存されないため、注意が必要
    - Row-Based(RBR)
        - 変更の全てを保存する
        - ファイルサイズの問題が起きやすい
    - Mixed
        - 状況によってSBR、RBRそれぞれを使いながら混在させる方式
```SQL
-- Statement
INSERT INTO users (name, created_at) VALUES ('名前', NOW());
UPDATE products SET price = price * 1.1 WHERE category = 'electronics';

-- Row
Row 1: user_id=123, name='名前', created_at='2024-01-15 10:30:00'
Row 2: product_id=456, price=110000 (既存: 100000)
```

## SOLID
- backend開発の理論上のこと
1. Single Responsibilty Principle
- classは一つの目的や、機能で変更しないといけない。
2. Open-Closed Principle
- moduleの中で変更を下げて、拡張ができる構成にすること
3. Liskov Substitution Principle
- sub Typeはmain Typeが決めた規則を守らないといけない
4. Interface Segregation Principle
- 機能ごとに特立したInterfaceを持つ
5. Dependency Inversion Principle
上位Moduleは下のModuleに依存しないように