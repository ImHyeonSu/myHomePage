---
sidebar_position: 1
---

# front_end_1

**Last updated:** _2025-10-15_

## reflow

- ブラウザーがページのレイアウトを再計算する過程
  - width, height などの属性が変わる場合
  - v-if
- width, height, margin, padding, border などは初期値から変更されないような考慮

## repaint

- 要素の形、スタイルなどが変わる時、発生、計算結果を画面に再描画する過程
  - background-color がかわる場合
  - v-show

## Progressive Partial Rendering(PPR)

- Webページの全体コンテンツをロードすることではなく、古典つを段階的にロードする方法を網羅していうこと、PPRの例としてSSR・CSRなどがある


## SSR(Server Side Rendering)

- server から完成された静的 HTML をクライアントに提供する方式
- 初期ロードが早い
- すでに、静的にコンテンツがはいってあるため、SEO（検索エンジン最適化）の側面でよい、つまり検索にヒットする可能性が高くなること、検索の上位に含まれる可能性がたかくなること

## CSR(Client Side Rendering)

- ブラウザーが server から開いてる HTML をもらって、クライアント側で必要な Javascript の bundle をダウンロードして bundle が実行して動的なコンテンツを入れる方式
- 最初の HTML には何も貼ってないため、SEO で検知できない
- クライアント側から、JS ファイルをロードすること、DOM を生成させる時間がかかるため初期ロードに時間がかかる
- 一回ロードしといて、ページの一部の変更などはデータだけのやり取りで済むので、時間がかからない
- HTML の骨だけサーバーから作成するので、サーバーの負担が少ない
