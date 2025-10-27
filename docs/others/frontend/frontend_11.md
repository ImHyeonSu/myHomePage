---
sidebar_position: 11
---

# front_end_11

**Last updated:** _2025-10-16_

## User-Agent

- HTTP リクエストヘッダーに含まれる文字列で、Web サーバーにアクセスするクライアント（ブラウザ、OS、デバイスなど）の情報を識別するために使用

```javascript
// Chrome (Windows)
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

// Safari (iPhone)
"Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1";

// JavaScriptで取得
console.log(navigator.userAgent);
```

## DevTools

- Performance タブ

  - FCP (First Contentful Paint): ユーザーが最初のコンテンツを見ることができる時点
  - LCP (Largest Contentful Paint): メインコンテンツ(最も大きな要素)のロード完了時点
  - TTI (Time to Interactive): ページと正常にインタラクションできるようになる時点
  - TBT (Total Blocking Time): メインスレッドがブロックされた総時間
  - CLS (Cumulative Layout Shift): レイアウトが予期せず移動する程度

- Lighthouse タブ

  - Performance: パフォーマンススコア
  - Accessibility: アクセシビリティスコア
  - Best Practices: ベストプラクティススコア
  - SEO: 検索エンジン最適化スコア

- Network タブ

  - ダウンロードサイズ: 各リソースの容量
  - TTFB (Time to First Byte): サーバー応答時間

- Memory タブ

  - Heap Snapshot: メモリ状態のスナップショット
  - Detached DOM Tree: 不要に保持されている DOM オブジェクト(メモリリーク)

- Coverage タブ
  - 使用されていない JS/CSS: ロードされたが実行されていないコードの割合
