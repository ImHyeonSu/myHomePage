---
sidebar_position: 8
---

# react_8

**Last updated:** _2025-06-11_

## React の Suspense

- 非同期処理のローディング状態を処理するコンポーネント
- 既存の useEffect, isLoading などの制御ではなく、Suspense でラーピングをして、内部のコンポーネントのロードが終わったら自動的に Loading を消してロードされた内部コンポーネントを表示してくれる。
  - Promise-> pending → Suspense fallback(fallbackは仮に表示する画面の意味)
  - Promise가 resolved → Suspense 描画

```javascript
// App.js
import React, { Suspense, lazy } from "react";

const UserProfile = lazy(() => import("./UserProfile"));

function App() {
  return (
    <Suspense fallback={<div>Profile Loading</div>}>
      <UserProfile />
    </Suspense>
  );
}

// UserProfile.js
export default function UserProfile() {
  return (
    <div>
      <h2>Profile</h2>
      <p>中身</p>
    </div>
  );
}
```
