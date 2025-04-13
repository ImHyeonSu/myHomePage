---
sidebar_position: 4
---

# javascript_4

**Last updated:** _2025-04-13_

## Context

- コードが実行される環境

  - コード実行時点で使える変数、関数、Object、this キーワードの対象決定

- 全駅 Context
  - JavaScript が初めて実行されるときに生成される Context、プログラムが終了されるときまで続ける
  - ブラウザーは Window、Node.js からは Global が Context になる
- 関数実行 Context
  - 関数が呼ばれるたびに生成される Context
- Context の構図
  - Variable Environment
    - 変数と関数を保存するところ
  - This Binding
    - 実行 Context を意味する。関数が呼ばれた方式によって違う Object を参照
  - Scope チェイン
    - 現在 Context から変数がみつからない場合、上位の Context に探しに行くための連結を言う

## Hoisting

- JavaScript の場合は最初 Context を構築するとき、変数、関数を宣言しておく状況
   - varの場合宣言と初期化を全て行うので宣言文前で使える。→let,constは違う
   - functionの場合も宣言と初期化が同時に行われる
