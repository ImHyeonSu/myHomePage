---
sidebar_position: 3
---

# html_css_3

**Last updated:** _2025-07-22_

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

## transform vs position

- 動的位置変更時は基本的に transform を使う
  - transform: ブラウザの composite 段階 で実行
  - reflow、repaint が発生しない → パフォーマンス優秀
  - position プロパティ: reflow、repaint を引き起こす → パフォーマンス負荷
- position 使用
  - レイアウト構造を組む時
  - 親要素基準の位置調整が必要な時
  - 文書フローに従った配置が必要な時
- transform: 視覚的位置のみ変更（文書フローとは無関係）
- position: 実際の文書フロー内での位置変更

## HTML link の rel

- rel の preconnect, preload, prefetch は resource のロードの優先順位を設定してロードの性能を最適化するため使われる

### preconnect

- ブラウザが特定ネットワークに対して連結を設定しておくことを指示する。これにより DNS 検索、TLS ハンドシェイク、TCP 連結を事前に完了してリソースロードの時間を減らせる
- リソースをロードすることではなく、連結のみ事前に準備する

```HTML
<link rel="preconnect" href="https://external-resource.com" crossorigin="anonymous">
```

### preload

- 特定リソースを持ってくるように指示、例えウェブ Font を preload すると該当 Font を使用する前にダウンロードが完了されている

```HTML
<link rel="preload" href="/fonts/my-font.woff2" as="font" crossorigin="anonymous">
```

### prefetch

- ブラウザーが必要な可能性があるリソースを自陣に持ってくるように指示

```HTML
<link rel="prefetch" href="/next-page.css" as="style">
```
