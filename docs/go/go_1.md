---
sidebar_position: 1
---

# go_1

**Last updated:** _2024-03-31_

## go.mod

- goModlue の設定ファイル

1. Module 設定

   - このファイルは現在 Project が鼠族されている module の名前と version を指定

2. 依存性管理

   - このファイルには現在 Project が依存してる package と version の情報が入っている

3. dependency と update などを選択するとき go.mod のファイルを利用して version 指定可能

## go.sum

- go.mod から設定されているファイルが間違ってないことを記録するファイル

## その他

- json.Marshal, json.UnMarshal

  - Marshal は JSON 化すること。
  - UnMarshal は JSON 形式から戻せること

- defer
  - 関数が終了される前に実行されるようにしてくれるコード、defer が複数ある場合、一番最後に宣言されたコードから実行される(LIFO)
