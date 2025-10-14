---
sidebar_position: 1
---

# DB_1

**Last updated:** _2025-08-27_

## データベースタイプ別特徴まとめ:

### リレーショナルデータベース (SQL)

- 固定されたテーブル構造、データ整合性保証、重複最小化
- スケールアップ方式、スキーマ変更困難、複雑なクエリ発生可能

### 非リレーショナルデータベース (NoSQL)

- 自由なスキーマ、水平拡張容易
- データ重複許可により一貫性低下および容量増加

1. キーバリュー DB (Key-value Database)

- 構造：キーと値のペアでデータ保存
- 特徴：シンプルな構造、高速な読み書き
- 代表例：Redis、Amazon DynamoDB
- 用途：セッション管理、キャッシュ、リアルタイムランキング

2. ドキュメント指向 DB (Document-oriented Database)

- 構造：JSON、BSON、XML 形式でデータ保存
- 特徴：柔軟なスキーマ、複雑なデータ構造を簡単に表現
- 代表例：MongoDB、CouchDB
- 用途：CMS、ユーザープロファイル管理

3. カラム指向 DB (Column Family Database)

- 構造：データをカラム単位で保存
- 特徴：大量データ処理に適合、行ごとに異なるカラム数・型を持てる
- 代表例：Apache Cassandra、HBase
- 用途：大規模データ分析、ログ収集

4. グラフ DB (Graph Database)

- 構造：ノードとエッジのグラフ構造
- 特徴：複雑な関係性の表現、ラベルによる効率的なクエリ実行
- 代表例：Neo4j、Amazon Neptune
- 用途：ソーシャルネットワーク分析、推薦システム

5. 時系列 DB (Time Series Database)

- 構造：タイムスタンプ付きデータの保存
- 特徴：時間経過による変化の測定に最適化
- 代表例：InfluxDB、Prometheus、TimescaleDB
- 用途：IoT データ収集、金融データ分析

### 選択基準

- リレーショナル: 構造化データ、トランザクション重要、データ一貫性必須（例：サーバーアプリケーション）
- 非リレーショナル: 低レイテンシ要求、スキーマ頻繁変更、大容量データ処理

## DB Transaction

### Optimistic Lock

- データの衝突が少ないことを仮定して、データを読み込む時に Lock を設定せず、データを修正する時に衝突があるかどうかを確認する。アプリケーションで直接ロールバックなどを処理する ###　 Pessimistic Lock
- データの衝突が多いことを想定して、Transaction が始まる時に Shared Lock, S-Lock または Exclusive Lock, X-Lock を設定して、他の Transactionga データに接近できないようにする方法
- S-Lock: ほかの Transaction から読み込むのはできるけど編集はできない
- X-Lock: ほかの Transaction から何もできない
- ex. MYSQL は Transaction で X-Lock でも Select はできる
