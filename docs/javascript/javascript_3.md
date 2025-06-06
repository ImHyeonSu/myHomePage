---
sidebar_position: 3
---

# javascript_3

**Last updated:** _2025-04-27_

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
  - 動的な配列、最初に長さを決めなくても大丈夫だし、動的に伸ばせる

```javascript
const obj = { "first-name": "John", age: 30 };
console.log(obj["first-name"]); // 'John'

const arr = [1, 2, 3];
console.log(arr[0]); // 1
```

## for of, in

- of

```javascript
// Array
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit); // apple, banana, orange
}

// String
const str = "Hello";
for (const char of str) {
  console.log(char); // H, e, l, l, o
}
```

- in

```javascript
// object
const person = { name: "林", age: 25 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 配列のin使用
const arr = ["a", "b", "c"];
for (const index in arr) {
  console.log(index); // "0", "1", "2" (文字列でreturnされる)
}
```

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
newParagraph.textContent = '新しい要素';

// 要素追加
parent.appendChild(newParagraph);

// 要素修正
heading.innerHTML = '新しいタイトル';

// 要素削除
parent.removeChild(heading);
```
