---
sidebar_position: 7
---

# front_end_7

**Last updated:** _2025-09-16_

## treeshaking

- 最終の bundle の容量を減らすために使われてない dead コードを bundle からなくす、最適化の概念
- ESmodule の使用が必要

## jsx

- JavaScript XML、react から UI を宣言的に表現するための拡張文法
- 別途のトランスフォームが必要(React ライブラリなど)

```jsx
const element = <h1 className="greeting">Hello, JSX!</h1>;
```

## CSS 詳細度（Specificity）

- 複数の CSS が競合した時の優先順位を決めるルール
  - 点数が同じ → 後から宣言したものが勝つ
  - 解決策：!important よりより具体的なセレクタを使用

1. インラインスタイル style="..."
2. ID #unique
3. クラス .text
4. タグ p

```css
p {
  color: blue;
} /* タグ - 弱い */
.text {
  color: red;
} /* クラス - 中間 */
#unique {
  color: green;
} /* ID - 強い ✅ 適用！ */
```
