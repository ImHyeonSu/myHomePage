---
sidebar_position: 5
---

# javascript_5

**Last updated:** _2025-04-20_

## rendering pipe line

1. DOM 生成

- HTML ファイルを HTML トークンに変換して DOMTree を生成

2. CSSOM 生成

- CSS をブラウザに適用するために変換

3. Render tree の生成

- ブラウザが DOM と CSSOM を結合して RenderTree を生成する
  - display:none などは RenderTree に含まれない、ブラウザに見せる要素だけ含まれる

4. layout

- ブラウザが RenterTree を元にして各要素を位置、デカさなどを計算すること
  - 画面のサイズが変われば、ブラウザはこのレイアウトをまた行う(reflow)

5. ペインティング
- ブラウザが画面に描画すること

6. コンポジティング
- 各要素をlayerに分離して、最終的に画面に構成して描画する
