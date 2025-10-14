---
sidebar_position: 4
---

# react_4

**Last updated:** _2023-10-20_

## next.js とは

- 開発環境の簡素化: バンドラー、ルーティングなど複雑な設定が不要
- ファイルベースルーティング: ディレクトリ構造だけでページ生成
- 多様なレンダリング対応: CSR、SSR、SSG 内蔵
- 最適化機能: 画像最適化、コード分割、データキャッシングを標準提供
- 生産性向上: React 開発の複雑さを解決
- 高速開発と最適化されたパフォーマンスが欲しければ良いが、細かい制御や自由な構造が必要なら制約となる可能性がある。

1. ssr 支援

   server からぺーじを生成してクライアントに提供

2. ssg 支援

   ビルド時点で HTML ファイルを作成してクライアントに提供

3. ファイル基盤の Routing

   pages を diretory に追加することで pages 自動で生成される。

4. イメージファイルの最適化

## Hydration

- server からもらった静的な HTML に Javascript コードを入れる過程、HTML ページを動的な React アプリケーションに変えるプロセス

1. server rendering
   - server から React コンポーネントを HTML に Rendering する
2. HTML 送信
   - この静的 HTML をクライアントに送信
3. JavaScript ロード
   - ブラウザーが JavascriptBundle をダウンロードして実行する
4. Hydration
   - React が HTML イベントリスナーを入れる

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

- ページ遷移時に全体をリロードせず、ブラウザ内で必要なコンポーネントのみを入れ替える技術
  - CSR の書き方は以下のように useEffect を使う
  - クリック → URL 変更（JavaScript で） → コンポーネント切り替え → 必要なデータのみ取得

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
