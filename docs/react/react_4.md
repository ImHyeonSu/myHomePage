---
sidebar_position: 4
---

# react_4

**Last updated:** _2023-10-20_

## next.js とは

- react の ssr(サバーサイド)と ssg(定的サイド)を支援する webFrameWork の一つ

1. ssr 支援

   server からぺーじを生成してクライアントに提供

2. ssg 支援

   ビルド時点で HTML ファイルを作成してクライアントに提供

3. ファイル基盤の Routing

   pages を diretory に追加することで pages 自動で生成される。

4. イメージファイルの最適化

## routing の書き方

1. app/page.js の作成

   - page.js を作成することで、固有なパースを持つようになる。
   - この page.js がエントリポイントになる。

2. 新しいページは必ずフォルダと共に作成

   - 新しいページは app/新しいページ用のフォルダ/page.js のように作成
   - また新しいページの下にも新しいページを作成することができる
   - -> app/新しいページ用のフォルダ/新しいページ用のフォルダ 2/page.js
   - こんな形になると route は新しいページ用のフォルダ/新しいページ用のフォルダ 2 のようになる。

3. layout は必ず定義する。

   - 必ず app/layout.拡張子のように作成しとかないといけない。

## Next.js の Client side Rendering の考え方

- CSR の書き方は以下のように useEffect を使う

```javascript
import React, { useState, useEffect } from "react";

export function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return <p>{data ? `Your data: ${data}` : "Loading..."}</p>;
}
```
