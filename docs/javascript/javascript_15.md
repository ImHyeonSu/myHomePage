---
sidebar_position: 15
---

# javascript_15

**Last updated:** \_2025-09-24

## memory leak の原因

- eventListener を削除してないこと
- closer がずっと維持されること
- global 変数を作りすぎること
- window の performance, memory から確認できる

## メモリ割り当て

- Stack 領域

  - 原始値（文字列、数値など）
  - 固定サイズのため静的データと呼ばれる
  - コンパイル時にサイズが決定

- Heap 領域

  - オブジェクト（参照型）
  - 実行時に動的にメモリ割り当て
  - 動的データと呼ばれる

```javascript
const name = "maeil-mail"; // メモリ割り当てが発生
```

- Mark-and-sweep
  - Mark 段階：ルートオブジェクトから到達可能なオブジェクトをマーク
    - ルートオブジェクト（Root Object）
      - window, global
      - 現在実行中の関数、関数のパラメータ
      - closer など
  - Sweep 段階：マークされていないオブジェクトを解放
  - 利点：循環参照があってもルートから到達不可能ならば解放される
