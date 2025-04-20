---
sidebar_position: 5
---

# react_5

**Last updated:** _2025-04-20_

## Controlled Component, Uncontrolled Component
- Controlled Componentはリアルタイムで値の変換が検知できる(state管理だから)
- Uncontrolled ComponentはSubmitした瞬間値のバリデートなどが発火する
- →何を使うかは性能の部分などに関わる部分
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
