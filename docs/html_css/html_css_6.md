---
sidebar_position: 6
---

# html_css_6

**Last updated:** _2025-08-04_

## 疑似要素

- タグの中の一部のスタイルの修正のためつかう
- ::before, ::after, ::first-letter, ::first-line など

```css
button::before {
  content: "🔥";
  margin-right: 5px;
}
```

##　疑似クラス

```css
:hover - マウスホバー時
:focus - フォーカス取得時
:active - アクティブ（クリック）時
:first-child - 最初の子要素
:last-child - 最後の子要素
:nth-child(n) - n番目の子要素
:nth-of-type(n) - 同じタグのn番目
:checked - チェックされた状態
:disabled - 無効状態
:enabled - 有効状態
:required - 必須入力項目
:link - 未訪問リンク
:visited - 訪問済みリンク
:not() - 否定セレクタ
:empty - 空の要素
:root - ルート要素
```
