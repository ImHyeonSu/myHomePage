---
sidebar_position: 5
---

# react_5

**Last updated:** _2025-04-27_

## Controlled Component, Uncontrolled Component

- Controlled Component はリアルタイムで値の変換が検知できる(state 管理だから)
- Uncontrolled Component は Submit した瞬間値のバリデートなどが発火する
- → 何を使うかは性能の部分などに関わる部分

```javascript
// Controlled Component
import {useState} from 'react';

export default function APP(){
   return(
      <form>
         <label>name : </label>
         <input value={name}
         onChange= {(e) => {
            setName(e.target.value);
         }} />
      </form>
   )
}

// Uncontrolled Component
import {useRef} from 'react';
export default function APP(){
   cons nameRef = useRef(null);
   const submitName = (e) =>{
      e.preventDefault();
      console.log(nameRef.current.value)
   }
   return (
      <form onSubmit={submitName}>
         <label>name : </label>
         <input ref={nameRef} />
      </form>
   )
}
```

## UseRef

- コンポーネント内で変更可能な値を保存・管理する React フック
- DOM 要素へのアクセス

```javascript
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus(); // マウント時にinputにフォーカス
}, []);

return <input ref={inputRef} />;
```

- 再レンダリングを発生させない値の保持

```javascript
const timerRef = useRef(null);

const startTimer = () => {
  timerRef.current = setInterval(() => {
    console.log("タイマー実行");
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerRef.current); // タイマー停止
};
```

## StrictMode

- 開発中に発生しそうな問題を事前に検知、予防するため使用

1. 安全ではないライフサイクルメソッドの検出
   - レガシーライフサイクルメソッド使用時に警告
   - componentWillMount、componentWillReceiveProps など
2. 予想されない不具合などを検知
   - コンポーネントを意図的に 2 回レンダリングして副作用を確認
   - useState、useEffect などの純粋性を検証
3. 非推奨 API の警告
   - findDOMNode のようなレガシー API 使用時に警告
   - 将来の React バージョンで削除される機能の通知

## ReactRendering

- Trigger phase
  - state/props の変更されるとき、React が更新キューに変更事項を登録
- render phase
  - React が変更された State、props によって UI がどう変更されるべきかを計算する過程
    - Virtual DOM 生成: 新しい Virtual DOM ツリー構築
    - Diffing: 以前の Virtual DOM と比較
    - 変更検知: どの部分が変わったか把握
- commit phase
  - 実際に変更された UI を DOM に反映する段階、その後 Rendering
  - Rendering ご useEffect などの Hook が実行される
