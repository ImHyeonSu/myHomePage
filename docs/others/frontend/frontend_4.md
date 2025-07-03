---
sidebar_position: 4
---

# front_end_4

**Last updated:** _2025-06-25_

## グローバル状態管理ライブラリを使用する理由

1. コンポーネント間の状態共有が容易

- 共通状態を中央化して複数のコンポーネントから簡単にアクセス
- Props drilling 問題の解決（親 → 子へ複数段階を経る状態受け渡しが不要）

2. 関心の分離

- 状態管理ロジックをコンポーネントから分離
- コンポーネントは UI ロジックのみに集中可能
- 例：Redux で Reducer に状態変更ロジックを定義、コンポーネントは Dispatch で呼び出し
  コードの再利用性とテスト容易性の向上

3. パフォーマンス最適化

- 不要な再レンダリングを防ぐメカニズムを提供
- 例：Zustand の購読メカニズムで状態が変更されたコンポーネントのみ再レンダリング

## Node

- DOM ツリーを構成する最も基本的な単位
- DOM のすべての構成要素は Node で表現され、複数のタイプが存在
  - Document Node（文書全体）
  - Element Node（HTML タグ）
  - Text Node（テキスト内容）
  - Comment Node（コメント）
  - Attribute Node（属性）など
- Element は Node の一種で、HTML や XML タグで表現されるオブジェクト

```HTML
<div>と<span>：Element Node（NodeでありながらElement）
"Hello"テキスト：Text Node（NodeだがElementではない）
コメント：Comment Node（NodeだがElementではない）
<div id="container">
  Hello
  <!-- これはコメントです -->
  <span>World</span>
</div>
```

- Node 専用のプロパティ/メソッド：
  - textContent：すべての Node で使用可能
  - childNodes：すべての子 Node を含む NodeList を返す
  - nodeType、nodeName など
- Element 専用のプロパティ/メソッド：
  - innerHTML：Element でのみ使用可能
  - children：Element タイプの子のみを含む HTMLCollection を返す
  - id、className、style などの HTML 属性
  - querySelector()、getElementsByClassName()など

```javascript
const container = document.getElementById("container");

console.log(container.childNodes);
// NodeList(5) [text, comment, text, span, text]
// テキストノード、コメントノードまですべて含む

console.log(container.children);
// HTMLCollection(1) [span]
// Elementノードのみ含む
```
