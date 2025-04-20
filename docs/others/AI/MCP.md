---
sidebar_position: 3
---

# MCP

**Last updated:** _2025-04-20_

## MCP

- LLM から外部データそすとツールにアクセスできるようにするプログラム
  - AI のツールなどに外部データを取れるように改善したり、動的なコンテキストを維持したりすることができるようになる

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

## MCP の流れ

1. Host が Client 生成
2. Client が MCPServer と連結設定
   - 連結設定の過程でProtocolのVersion、機能、権限などを設定する
