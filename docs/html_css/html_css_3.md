---
sidebar_position: 3
---

# html_css_3

**Last updated:** _2025-06-24_

## target, currentTarget

- target、イベントがが実際発生した要素
- currentTarget, イベントリスナーが連結された要素

## CSS box-sizing

- content-box (デフォルト値)

  - width = コンテンツ領域のみ
  - padding、border は追加で加算

```
width: 200px + padding: 20px + border: 2px
= 実際のサイズ: 244px
```

- border-box

  - width = コンテンツ + padding + border 全体
  - 指定したサイズが最終サイズ

```
width: 200px (固定)
コンテンツ領域は自動的に縮小
```
