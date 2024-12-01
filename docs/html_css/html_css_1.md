---
sidebar_position: 1
---

# html_css_1

**Last updated:** _2024-01-06_

## meta

- html の head の section に含まれるメータデータを定義するタグ、
  meta は主に文書の形式、文書のインコディン、viewport などを設定する

```html
<meta charset="utf-8" /> ->文字のincodingを指定
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" /> ->
モバイルでウェブがどう表示されるかを制御するタグ
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

## attach

- attach というのは DOM に要素が追加される動き自体を言うこと

## Class, id

- クラスは HTML 要素に共通的にスタイルと動作を適用したいとき使う
- id は HTML 要素を色別するための指定する

## margin, padding

- margin は外部要素の指定
- padding は内部要素の指定

```
1 上下左右全部
2 上下が一個目、左右が二個目
3 上が一個目、左右が二個目、下が 3 個目
4 上右下左順
```

## px

- pixel を言う、固定値

## 要素

- div -> 空間を提起する要素、他の要素をグルプ化したりレイアウトを構成するところに使う、container 役割
- p -> テキストブロックを区切れる
- span -> テキストの特定部分を示す inline 要素、block 要素ではないのでピンポイントでスタイル適用可能
- a ->　リンクを生成する要素、href はリンクの url 指定
- ui,li -> ui は順次がない区切れる要素、li は各項目の要素　 → 順次が表示されない・だけ表示される
- oi,li -> oi は順次がある区切れる要素、li は各項目の要素 → 順次が表示される

## selector

```javascript
1. 要素
div { color: bule; }

2. クラス
.highlight{ background-color: yellow; }

3.ID
#header { font-size : 24px; }

4.即成
`[type = "text"]`, `[href^="http://"]`
input[type="text"]{ border: 1px solid gray; }

5.子要素
div p {margin-botoom: 10px};

6.子選択
親要素 > こ要素
ui > li { list-style: none; }

7.仮想クラス
特定な状態や条件によって選択される
a:hover { text-decoration: underline }
```