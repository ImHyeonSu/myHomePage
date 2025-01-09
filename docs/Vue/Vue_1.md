---
sidebar_position: 1
---

# Vue_1

**Last updated:** _2025-01-10_

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
   - Vue は router を利用して SPA を構築する、Vue router を利用して色んなページを route できる

## Vue インスタンス、Dom

1. Vue インスタンス

   - Vue の中核となるオブジェクトとして、データとメソッドを管理
   - データのリアクティビティ（反応性）を処理
   - コンポーネントのロジックを担当

```javascript
const app = new Vue({
  // これが Vue インスタンス
  el: "#app",
  data: {
    message: "Hello",
  },
  methods: {
    showMessage() {
      alert(this.message);
    },
  },
});
```

2. Dom([詳細](http://localhost:3001/docs/javascript/javascript_3))

```javascript
<div id="app">  <!-- これが実際の DOM  -->
    <p>{{ message }}</p>
    <button @click="showMessage">クリック</button>
</div>
```

3. 両者の関係

   - インスタンス：データとロジックを持つ「頭脳」の役割
   - DOM：実際に画面に表示される「顔」の役割
   - Vue：頭脳（インスタンス）の変化を自動的に顔（DOM）に反映させる「管理者」の役割

```javascript
// Vue インスタンス（データ管理）
const app = new Vue({
    data: { message: 'Hello' }
})

// ↕️ Vue が自動的に同期

// DOM（画面表示）
<div>{{ message }}</div>  // 'Hello' が表示
```

## lifecycle

1. Creation (作成) 段階

   - beforeCreate

     - Vue インスタンスの作成が開始
     - まだデータの監視やイベントの設定が行われていない段階
     - データやメソッドへのアクセス不可

   - created
     - Vue インスタンスの作成が完了
     - データやイベントが使用可能
     - まだ DOM は生成されていない状態

2. Mounting (DOM への マウント) 段階

   - beforeMount

     - 仮想 DOM が生成された状態
     - 実際の DOM へのマウント直前
     - テンプレートのコンパイルが完了

   - mounted

     - 実際の DOM へのマウントが完了
     - $el を介して DOM へのアクセスが可能
     - 全ての画面要素が使用可能

3. Updating (更新) 段階

   - beforeUpdate

     - データの変更を検知
     - DOM の再レンダリング直前
     - 変更されたデータは反映済み、DOM はまだ

   - updated:
     - 変更されたデータで DOM の更新が完了
     - 変更された画面の確認が可能
     - DOM の更新が完全に完了した状態

4. Destruction (破棄) 段階

   - beforeDestroy

     - Vue インスタンス破棄の直前
     - インスタンスの機能はまだ生きている
     - クリーンアップ作業の実行が可能

   - destroyed

     - Vue インスタンスの破棄が完了
     - 全てのイベントリスナーが削除
     - 全ての子インスタンスも破棄

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
  - Vue.js プロジェクトで moduleBundling に関わる様々な機能を使用できるようにするツル
- VueCLI
  - VueCLI はこれを元にしてプロジェクトを優しく設定管理できるようにするツル

## export default

- module から基本的に外に出す値、クラスなどを定義する部分、これを利用してコンポーネントなどでお互いにクラスな、変数などを使う

## npm run build

- リリースファイルを作成するためのコマンド

1. 初期化
   - ビルドの環境設定を読み込み
   - 過去のビルドフォルダ(dist/build)のクリーンアップ
2. ソースコード収集＆分析
   - エントリーポイントから全ての関連ファイルを収集
   - ファイル間の依存関係を分析
3. 変換＆コンパイル
   - TypeScript、SCSS などをブラウザが理解できる形式に変換
   - 最新の JavaScript を下位バージョン互換コードに変換
4. バンドル＆最適化
   - 関連ファイルを一つにまとめる
   - 未使用コードの削除（Tree Shaking）
   - コードの圧縮と最適化

## npm run dev

- 開発サーバーを立ち上げるためのコマンド

1. サーバー初期化

   - 開発サーバーは起動時に以下の処理を実行
     - 指定されたポート（例：8080）で HTTP サーバーを起動
     - プロジェクトのソースコードをメモリに読み込み
     - index.html をエントリーポイントとして設定

2. ブラウザでのアクセス処理

   - localhost:8080 にアクセス
     - ブラウザが index.html をリクエスト
     - サーバーが必要なスクリプトを注入した index.html を返却
     - ブラウザが各スクリプトを順次実行

3. ファイル変更時の更新プロセス
   - コード変更時
     - 開発サーバーが変更を検知
     - 変更されたファイルを再処理
     - WebSocket を通じて変更をブラウザに通知
     - ブラウザが変更されたモジュールのみを再読み込み

- Webpack

  - 初期起動時にすべてのモジュールをメモリ上でバンドル
  - ファイル変更時は関連モジュールを再バンドル
  - HMR で変更を反映

- Vite
  - 初期バンドルなしで即時起動
  - 必要なモジュールのみオンデマンドで変換
  - ES モジュールを活用した高速 HMR

## Webpack

bundler

1. すべてのソースファイルを分析
2. 依存関係ツリーを構築
3. 一括バンドル処理
4. コード最適化（圧縮、ミニファイ）
5. dist フォルダに出力

## vite

bundler

1. ES ビルドで高速な事前バンドル
2. Rollup で本番用最適化
3. チャンク分割の自動最適化
4. dist フォルダに出力
