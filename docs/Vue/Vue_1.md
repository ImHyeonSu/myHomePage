---
sidebar_position: 1
---

# Vue_1

**Last updated:** _2024-01-06_

## 説明

progressiveFrameWork、Javascript ライブラリ
画面の開発するのに使う

1. Reactive data bind
   - data と Dom を連結して data が変更される時、画面も自動で更新される
2. component
   - vue ではコンポーネントを利用している、それぞれのコンポーネントは再利用ができる
3. directive
   - Vue の directive は html の属性みたく Dom の要素に特定な動作を付与できる
   - ex.. v-if, v-for, v-bind, v-on など
4. event handling
   - Vue では v-on を利用してイベントを検知できる
5. routing
   - Vue は router を利用して SPA を構築する、Vue router を利用して色んなページを route で k リウ

## Dom

- Document Object Model の略字、html とか XML 文書のプラグラミング Interface

## lifecycle

1. creation Lifecycle
   - beforecreate: インスタンスが作られて、初期化される前、データとイベントには接近できない
   - created: インスタンスが作られて、初期化された直後、データとイベントに接近できる
2. updateing Lifecycle
   - beforeMount: テンプレートが Dom にマウントされる前
   - mounted: インスタンスが Dom にマウントされた後
   - beforeUpdate: データが変更されて Dom が patch される前
   - updated: データが編目されて、Dom が patch された後
3. destruction Lifecycle
   - beforeDestroy: インスタンスが破壊される前に呼び出される、まだインスタンスに接近できる状態、インスタンスの片付けができる
   - destroyed：インスタンスが破壊された後、呼ばれる

## public

- build される時、そのままコピーされる程的データとして使われる
  - 程的データ：css, image,font など
  - js->env ファイル：正しい形式

```javascript
VUE_APP_API_KEY = api_key
VUE_APP_BASE_URL = url
->but
window.env = {
    appEnv:: 'local',
    taxRate: 1.1
}
```

- index.html
  - public にある index.html は vue のエントリポイントとして使われる →webapp が始まった時に最初ロードされるファイル

```html
<div id="app"></div>
　→vueアプリのマウント時点
```

- Vue.prototype
  - vue.js で prototype は全ての Vue インスタンスで使えるようになる →plugin などで作成して、全域で使用

```javascript
Vue.prototype.$myMethod = function () {
  //内容
};
```

- assets
  - アイコン、動的なファイルが入っている →img ディレクトリ、js ディレクトリ（common,const,microsoft,websocket）、less ディレクトリ（css ファイル）

## vue.config.js

- webPack
  - Vue.js プロジェクトで modulebundliing に関わる様々な機能を使用できるようにするツル
- VueCLI
  - VueCLI はこれを元にしてプロジェクトを優しく設定管理できるようにするツル

## export default

- module から基本的に外に出す値、クラスなどを定義する部分、これを利用してコンポーネントなどでお互いにクラスな、変数などを使う
