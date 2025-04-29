---
sidebar_position: 3
---

# MCP

**Last updated:** _2025-04-20_

## MCP

- LLM から外部データそすとツールにアクセスできるようにするプログラム
  - AI のツールなどに外部データを取れるように改善したり、動的なコンテキストを維持したりすることができるようになる
- LLMが外部機能をプロンプトで呼び出したり、制御したりできるAPIの標準
## 構図

- Host
  - AI アプリケーションのコンテイナー
  - いろんなクライアントのインスタンスを管理する
  - Claude APP、IDEs
- MCP Clients
  - ホストによって生成され、Server と徳立の連結を維持する
  - Server ひとつ等セッションが一つある
  - Protocol の機能交換？
- MCP Servers
  - コンテキストと機能提供
  - 特立で動く
- Context
  - 特定セッション状態、目的が含まれてる情報の単位
  - モデル間の通信中の必要な情報を保存更新する
- Messages
  - モデル間で、またはUser間でやり取りするデータの単位
  - テキスト、命令語などが含まれる

## MCP の流れ
1. 連結設定
   - Host が Client 生成
   - Client が MCPServer と連結設定
2. Contextの交換
   - ServerはClientにデータソースのContext情報を提供
   - Clientはこの情報をHostProcessに渡す
   - HostProcessはこの情報をAIモデルに提供
3. Toolを呼び出す
   - AIモデルは特定の作業のためToolを呼び出す
   - HostProcessはこの呼び出したことを適切なClientに送信
   - Serverはこの送信された作業を実行して、結果をClientに変換
4. 結果処理
   - クライアントはServerからもらった結果をHostProcessに渡す
   - HostProcessはこの結果をAIモデルに提供
   - AIモデルはこの情報をもとにして回答を生成
