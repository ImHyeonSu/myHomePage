---
sidebar_position: 17
---

# javascript_17

**Last updated:** \_2025-09-29

## script の書き方

### 通常

- HTML パース → HTML パース中断 → ダウンロード待ち → 実行待ち → パース再開

```html
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

### async

- ダウンロード: 並列 ✅
- 実行タイミング: ダウンロード完了次第すぐ
- HTML パース: 実行時に一時停止 ⏸️
- 実行順序: ダウンロード完了順（ランダム）、順序不要

```html
<script async src="google-analytics.js"></script>
<script async src="facebook-pixel.js"></script>
```

### defer

- ダウンロード: 並列 ✅
- 実行タイミング: HTML パース完了後
- HTML パース: 中断しない ✅
- 実行順序: HTML 記述順（保証）、順序重要

```html
<!-- 順序が重要なスクリプト -->
<script defer src="jquery.js"></script>
<script defer src="app.js"></script>
```
