---
sidebar_position: 5
---

# html_css_5

**Last updated:** _2025-08-04_

## Sass,Less(Preprocessor)

・Preprocessor
プログラミング言語やスタイルシート言語のソースコードを処理する前に追加変換を行うソフトウェア
・Mixin
コードをスタイルシートからコードを再利用するための機能、スタイルを定義しておいてメソッドみたく使える書き方。
メインテナンスができるようになる。
・webkit, moz など
ウェブブラウザエンジンに付ける書き方、特定のブラウザや属性を適用するとき使う(つまり特定ブラウザで CSS などをまだ支援してない時とかに使って強制的に適用させる)
・webkit
主に、Safari と Chrome ブラウザに使用されるレンダリングエンジン
・moz
Mozilla Firefox ブラウザで使われる、Firefox は Gecko エンジンを使う

1. Sass
   Scss の書き方支援、変数、mixin などを活用できる、ライブラリーの数が多い
   短所は学ぶことに時間がかかる。複雑なプロジェクトには Compile に時間がかかる。

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}
.box {
  @include border-radius(10px);
}
```

1. Less
   Css は類似文法、既存 CSS コードに統一ができる Compile に時間の時間が短い
   文法が単純だから活用性が低い、ライブラリーなどが少ない。

```less
 border-radius($radius){
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    border-radius: $radius;
}
.box {
     border-radius(10px);
}
```

## Zero Runtime Css

- 全ての Css がビルドする過程で生成される
- Javascript の Bundle のデカさが変わる。
- Javascriptと同じコードで書けること、TypeScriptなどと書けることが長所
```javascript
// styles.css.ts
import { style } from "@vanilla-extract/css";

export const button = style({
  background: "blue",
  color: "white",
  padding: "10px 20px",
  ":hover": {
    background: "darkblue",
  },
});
```
