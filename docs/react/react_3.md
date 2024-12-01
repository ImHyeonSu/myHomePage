---
sidebar_position: 3
---

# react_3

**Last updated:** _2023-10-14_

## Redux library

state 管理ライブラリ

1. store

   APP の全体状態を保存するオブジェクト, reduxAPP は store の中に位置する。APP のすべてのデータが共有される

2. action

   状態を説明するオブジェクト、action は type 属性を必須で持つ、state をどのように変更するかを含める。特定のデータが修正、追加される時 action が発生

3. reducer

   store の現状と action の入力をもらって新しい状態を返却する関数。

4. dispatch

   action を store に出す関数。action を dispatch すると reducer が呼ばれて新しい state を生成する。

5. subscribe

   状態が変更される時、呼び出される関数を登録するメソッド

6. Slice

   ReduxAPP の構図の一個、状態と関わる reducer,action をグルプ化した領域

```javascript
// api機能をreduxに追加するためのコード
export const apiSlice = createApi({
  // baseUrlを設定し、HTTP通信を行う
  baseUrl:"",
  // 基本的なAPIの設定を定義
  baseQuery: fetchBaseQuery({
  // api通信のheaderを設定
  prepareHeaders: (headers) =>{
    headers.set("設定key","value");
    return headers
  },
}),
  // APIの個別エンドポイントの定義
  endpoints: (builder) => ({
    // builderはmutation(データの変更)query(データを持ってくる時のみ)を使用
    test: builder.mutation({
      // queryはAPIを呼び出す関数 testInfo:testinfoはデータをAPIに送る時、使用するデータ
      query: (testInfo: testInfo) => ({
        url: "/liff",
        method: "POST",
        body: testInfo,
      }),
    }),

  })

```

```javascript
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";


// ReduxStoreからstateデータを変更するメソッドを呼び出すために設定
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// ReduxStoreからstateデータを取得
export const useAppSelector = useSelector.withTypes<RootState>();

```

### Reducer

- Reducer は redux の state をアップデートする関数
  - Reducer はアプリケーションの state がどのように変わるのかを定義
  - Action と state をもらって新しい state を Return

### Middleware

- State が Reducer で実行される前に、処理を入れたい場合使う、action の流れを制御する。

### Slice

- Reducer の初期値設定、action 設定、Reducer 定義などをする Reducer の設定ファイル
