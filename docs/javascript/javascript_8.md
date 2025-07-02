---
sidebar_position: 8
---

# javascript_8

**Last updated:** \_2025-06-18

## TypeScript

- javaScript にタイプ情報を明示的に書くようにする、拡張言語
- コードの安全性が高まる：タイプを書くことによってランタイムの前にタイプエラーなど検知ができる
- 構図化：interface, generic, enum などが追加されることによって構図化されてるコードを書くことができる

### class

- Public, Private, Protected
- Protected の場合は、ただ暗黙的な約束、強制で Protected にすることは不可能
  - Public は this.name = "John”;
  - Private は this.#secret = "hidden”;
  - Protected は this.\_secret = ‘hidden’;
- TypeScript からは提供

```javaScript
class Foo {
    public a: string;    // 継承クラスアクセス O / 外部アクセス O
    private b: number;   // 継承クラスアクセス X / 外部アクセス X
    protected c: boolean; // 継承クラスアクセス O / 外部アクセス X

  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
```

## プロトタイプ

- javaScript でオブジェクト間の継承を実装するメカニズム
- すべてのオブジェクトは[[Prototype]]という隠しプロパティを持っている
- プロトタイプチェーン: プロトタイプが連鎖的に連結された構造
- 継承メカニズム: 上位プロトタイプのプロパティ・メソッドを下位オブジェクトが使用可能
- 検索順序: 自分 → プロトタイプ → プロトタイプのプロトタイプ → ... → null

```javascript
const dog = {
  greet() {
    console.log("Hello from dog!");
  },
};

const maru = Object.create(dog); // maruのプロトタイプがdogに設定
maru.greet(); // "Hello from dog!" 出力




function Dog() {}
Dog.prototype.greet = function () {
  console.log("Hello from Dog!");
};

const maru = new Dog(); // maruのプロトタイプがDog.prototypeに設定
maru.greet(); // "Hello from Dog!" 出力
```
