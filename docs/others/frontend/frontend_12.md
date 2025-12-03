---
sidebar_position: 12
---

# front_end_12

**Last updated:** _2025-12-01_

### Debounce (デバウンス)

- 「入力が終わるまで待ってから一度だけ実行」
- 適した場面: 検索自動補完、フォーム検証

```javascript
const debouncedSearch = debounce(searchAPI, 500);
// '가' 入力 → 待機
// '나' 入力 → 待機（前のタイマーキャンセル）
// '다' 入力 → 待機
// (500ms入力なし) → API呼び出し！
```

### Throttle (スロットル)

- 「一定時間ごとに一度だけ実行」

```javascript
// スクロール
const throttledScroll = throttle(checkPosition, 200);
// 0ms: 実行 ✅
// 50ms: 無視
// 200ms: 実行 ✅
// 400ms: 実行 ✅

// Debounce → スクロール中は何もしない → 停止後にロード → 白い画面 😓
// Throttle → スクロール中も200msごとにチェック → すぐロード → 自然 ✨
```
