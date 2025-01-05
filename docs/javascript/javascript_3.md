---
sidebar_position: 3
---

# javascript_3

**Last updated:** _2025-01-05_

## array, object の . []の違い

- .の場合
  - object の要素を取得する時、使う

```javascript
const obj = { name: "John", age: 30 };
console.log(obj.name); // 'John'
```

- []の場合
  - object, array の要素を取得するとき使う
  - array の idx を指定するときも使う

```javascript
const obj = { "first-name": "John", age: 30 };
console.log(obj["first-name"]); // 'John'

const arr = [1, 2, 3];
console.log(arr[0]); // 1
```

- arrow function
  - 関数表現式のため、変数または他の関数の引数として渡される、だから一般的なメソッドを宣言することとは違う

```javascript
function add(a, b) {
  return a + b;
}
const add = (a, b) => a + b;

function square(x) {
  return x * x;
}

const square = (x) => x * x;

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((x) => x * x);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

- closer
  - 外部関数内で定義された内部関数で、外部関数の変数にアクセスできる関数。
  - そして外部関数の実行が終了した後も、外部関数の変数にアクセスできる。これがクロージャの中心的な概念。

## Dom

- Document Object Model の略字、html とか XML 文書のプラグラミング Interface
- html コードを作成したら、webBrowser は html コードを読み取って dom を作成
  - Javascript は domObject の要素に対してコードでの制御ができるようになる。

```Javascript
<!DOCTYPE html>
<html>
<head>
    <title>DOMの例</title>
</head>
<body>
    <div id="parent">
        <h1>title</h1>
        <p>説明</p>
    </div>
</body>
</html>

↓
↓

{
    document: {
        html: {
            head: {
                title: {
                    textContent: "DOMの例"
                }
            },
            body: {
                div: {
                    id: "parent",
                    children: [
                        {
                            h1: {
                                textContent: "title"
                            }
                        },
                        {
                            p: {
                                textContent: "説明"
                            }
                        }
                    ]
                }
            }
        }
    }
}
```

```Javascript
// 要素選択
const parent = document.getElementById('parent');
const heading = document.querySelector('h1');

// 要素生成
const newParagraph = document.createElement('p');
newParagraph.textContent = '새로운 문단';

// 要素追加
parent.appendChild(newParagraph);

// 要素修正
heading.innerHTML = '새로운 제목';

// 要素削除
parent.removeChild(heading);
```
