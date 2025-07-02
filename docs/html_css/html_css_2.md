---
sidebar_position: 2
---

# html_css_2

**Last updated:** _2025-06-22_

## px, em, rem

### px

- 画面の物理的なピクセルを基準とした固定単位。
- 常に同じサイズで表示されるが、ユーザーのアクセシビリティ設定（ブラウザでのテキストサイズ拡大など）に対応できない。

### em

- 現在の要素に適用されている font-size を基準とする相対単位。
- 階層が深くなると値が累積されて予期しないサイズになる可能性がある。
- 例：親要素が 20px、子要素が 1.5em の場合、実際のサイズは 30px になる。

### rem(root em)

- 最上位の HTML 要素の font-size を基準とする相対単位。
- 要素階層による累積がなく、グローバルな基準に従う。
- HTML の font-size が 16px なら、1rem は常に 16px。アクセシビリティ対応に優れ、一貫したレスポンシブデザインに適している。

## HTML の data-

- HTML 要素にカスタムデータを格納するための属性。data-で始まる属性を使用。
  - DOM 要素に特定データをバインドし、JavaScript 処理で活用。
- HTML の data-user-id → JS の dataset.userId（camelCase 変換）
  - 値取得：要素.dataset.userId → "12345"

```html
<!-- datasetオブジェクトでアクセス -->
<div data-user-id="12345" data-role="admin"></div>

<less>
  /* attr()関数 */ article::before { content: attr(data-parent); } /*
  属性セレクタ */ article[data-columns="3"] { width: 400px; }
</less>
```

