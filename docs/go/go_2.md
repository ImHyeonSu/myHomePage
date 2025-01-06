---
sidebar_position: 2
---

# go_2

**Last updated:** _2025-01-06_

## 細かい部分

- null ではなく nil
- :=宣言と同時に代入

## defer

- defer で指定された処理は、関数が終了する直前に実行される。
- 複数の defer 文を使用した場合、最後に宣言されたものから順に実行される（後入れ先出し：LIFO - Last In First Out）。

```go
func example() {
    fmt.Println("関数開始")

    defer fmt.Println("1番目のdefer") // 3
    defer fmt.Println("2番目のdefer") // 2
    defer fmt.Println("3番目のdefer") // 1

    fmt.Println("関数の主処理")
}
```
