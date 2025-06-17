---
sidebar_position: 6
---

# javascript_6

**Last updated:** _2025-04-28_

## event propagation

- event propagation は DOM からイベントが発生した時、そのイベントがどのように流れるのかを説明する
- 大きく、Capturing,Target,Bubbling がある

1. Capturing

- イベントが一番 TOP 要素(document)からスタートしてイベントが発生した Target まで降りることをいう
- 降りながら EventListener が実行される

2. Target

- イベントが実際発生した Target の要素に着く段階

3. Bubbling

- Target の要素からイベント発生後、また DOM の上位要素にイベントが上がることを言う

4. stopPropagation

- メソッドを呼び出すと、現在の要素でイベントを止める機能

5. preventDefault

- リンクとページ遷移、FormSubmitなどを止める

```javascript
キャプチャリング: 祖父要素
キャプチャリング: 親要素
キャプチャリング: 子要素
バブリング: 子要素
バブリング: 親要素
バブリング: 祖父要素
<!DOCTYPE html>
<html>
<head>
  <title>イベント伝播の例</title>
  <style>
    div {
      padding: 20px;
      margin: 10px;
      border: 1px solid black;
    }
    #grandparent { background-color: lightblue; }
    #parent { background-color: lightgreen; }
    #child { background-color: pink; }
  </style>
</head>
<body>
  <div id="grandparent">
    祖父要素
    <div id="parent">
      親要素
      <button id="child">子要素（ボタン）</button>
    </div>
  </div>

  <script>
    // キャプチャリングフェーズ
    document.getElementById('grandparent').addEventListener('click', function(e) {
      console.log('キャプチャリング: 祖父要素');
    }, true);

    document.getElementById('parent').addEventListener('click', function(e) {
      console.log('キャプチャリング: 親要素');
    }, true);

    document.getElementById('child').addEventListener('click', function(e) {
      console.log('キャプチャリング: 子要素');
    }, true);

    // バブリングフェーズ
    document.getElementById('child').addEventListener('click', function(e) {
      console.log('バブリング: 子要素');
      // イベント伝播を停止する例
      // e.stopPropagation();
    }, false);

    document.getElementById('parent').addEventListener('click', function(e) {
      console.log('バブリング: 親要素');
    }, false);

    document.getElementById('grandparent').addEventListener('click', function(e) {
      console.log('バブリング: 祖父要素');
    }, false);
  </script>
</body>
</html>
```
