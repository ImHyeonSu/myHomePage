---
sidebar_position: 4
---

# html_css_4

**Last updated:** _2025-07-22_

## Reset CSS、 Normalize CSS

- Reset CSS は全てのブラウザーの基本的なスタイルを全部無くして、書き直す方式
  - 統一性がある開発ができる

```css
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
```

- Normalize CSS はブラウザー間の統一されてない要素のスタイルを修正する形で修正する

```css
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
a {
  background-color: transparent;
}
```

## 画像のalt属性
- 代替テキストの提供：画像が読み込めない場合に表示され、コンテンツの意図を伝える
- ウェブアクセシビリティの向上：視覚障害者が使用するスクリーンリーダーが画像の内容を音声で伝えることができるようにする
- SEO最適化：検索エンジンが画像コンテンツを理解し、検索結果に反映するのに役立つ