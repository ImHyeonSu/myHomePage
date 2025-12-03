---
sidebar_position: 17
---

# javascript_17

**Last updated:** \_2025-09-29

## CommonJS と ES Module の比較

### CommonJS

- 主に Node.js 環境で使用
- 同期的にモジュールをロード
- require でインポート、module.exports でエクスポート

### ES Module (ESM)

- JavaScript の公式標準モジュールシステム
- ブラウザと Node.js 両方で使用可能
- 非同期的にロード
- import でインポート、export でエクスポート

### 構文の違い

```javascript
// CommonJS:
javascriptconst express = require('express');
module.exports = { myFunc };
// ES Module:
javascriptimport express from 'express';
export { myFunc };
```

### 実務での重要な差異

1. 静的 vs 動的構造

- ESM: ビルド時に依存関係を把握可能 → ツリーシェイキングが可能
- CommonJS: ランタイムで動的に require 可能

2. 値のコピー vs 参照

- CommonJS: 値のコピーを渡す
  - getter 関数が必要
  - 不完全なコピーを受け取る可能性
- ESM: ライブバインディング(参照)を提供
  - export した変数がリアルタイムで同期
  - より安定的に動作
