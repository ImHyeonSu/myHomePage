---
sidebar_position: 12
---

# back_end_12

**Last updated:** _2025-08-16_

##　 IaC

- Infrastructure as Code（IaC） は、手動プロセスの代わりにコードを通じてインフラを自動的に構築・管理する方法

1. 宣言的方式（Declarative）

- 最終状態だけを定義
- ツールが自動的に構成
- 例：Terraform、AWS CloudFormation

2. 命令型方式（Imperative）

- 構成方法を直接定義
- 段階的にコマンドを実行
- 例：Ansible、AWS CDK

- メリット

- Git で変更履歴を追跡可能
- コード自体が文書の役割
- コードレビューで変更事項を検証
- 自動化により手動作業が不要
- コードの再利用で時間節約

- デメリット

- ツールの学習コストが高い
- インフラの状態管理が複雑
- 問題発生時のデバッグが困難
