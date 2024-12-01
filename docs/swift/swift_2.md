---
sidebar_position: 2
---

# swift_2

**Last updated:** _2023-12-01_

## Closure

- First-class object としても認められる
  - 変数に保存できる
  - 関数のパラメータとして渡せる
  - 関数の return として使える

```swift
// First-class objectの例
// 1. 変数に保存
let sayHello = { print("ごんばんは") }
sayHello() // "ごんばんは" 출력

// 2. 関数のパラメータとして渡せる
func doSomething(action: () -> Void) {
    action()
}
doSomething(action: sayHello)

// 3. 関数のreturnとして使ってる
func makeGreeter() -> (() -> Void) {
    return sayHello
}
let greeter = makeGreeter()
greeter() // "ごんばんは" 출력
```

```swift
{ (parameters) -> ReturnType in
}

// 例
let sayHello = { (name: String) -> String in
    return "Hello, \(name)!"
}
print(sayHello("Danny")) // "Hello, Danny!"
```

```swift
// 1. 全体
let add = { (a: Int, b: Int) -> Int in
    return a + b
}

// 2. returntype 省略
let add = { (a: Int, b: Int) in
    return a + b
}

// 3. return 省略
let add = { (a: Int, b: Int) in a + b }

// 4. パラメータ名省略
let add = { $0 + $1 }
```

```swift
// 関数定義
func doSomething(completion: () -> Void) {
    print("作業スタト")
    completion()
}

// 使い方 1: トレイリング Closure
doSomething {
    print("작업 완료")
}

// 使い方 2: normal Closure
doSomething(completion: {
    print("작업 완료")
})
```
