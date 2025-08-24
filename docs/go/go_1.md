---
sidebar_position: 1
---

# go_1

**Last updated:** _2025-01-06_

## golang とは

- Go 言語は特にクラウド環境での開発に適しており、シンプルかつ効率的なプログラミングができる
- 並行処理の実装が容易で、大規模システムの開発に適している点が大きな特徴です。

1. 基本特性

- Google が開発した現代的な言語
- シンプルな文法と高速なコンパイル
- 自動メモリ管理機能搭載

2. 主な強み

- 並行処理の容易な実装（ゴルーチン、チャネル）
- 高いパフォーマンス
- 充実した標準ライブラリ

3. 活用分野

- クラウドサービス開発
- マイクロサービス
- システムツール開発

## go.mod

- goModule の設定ファイル

1. Module 設定

   - このファイルは現在 Project が鼠族されている module の名前と version を指定

2. 依存性管理

   - このファイルには現在 Project が依存してる package と version の情報が入っている

3. dependency と update などを選択するとき go.mod のファイルを利用して version 指定可能

4. go mod tidyというコマンドで、実際に使われてるライブラリ、使われてないライブラリを自動で削除、インストールしてくれる。
```go
# プロジェクト内での実行
go mod tidy

# 特定のGoバージョンで実行
go mod tidy -compat=1.17

# 詳細情報を出す
go mod tidy -v
```

## go.sum

- go.mod から設定されているファイルが間違ってないことを記録するファイル

## ライフサイクル

1. 初期化フェーズ

- パッケージレベルの変数初期化
- init()関数の実行
- main パッケージの init()関数実行

2. メイン実行フェーズ

- main()関数が実行され、プログラムの主要な処理が行われます。

3. 終了フェーズ

- defer 文の実行、ゴルーチンの終了、リソースの解放が行われます。

```go
package main

import "fmt"

// グローバル変数
var globalVar = "初期値"

// 初期化関数
func init() {
    fmt.Println("初期化処理")
}

// メイン関数
func main() {
    fmt.Println("メイン処理")
    defer fmt.Println("終了処理")
}
```

## その他

- json.Marshal, json.UnMarshal

  - Marshal は JSON 化すること。
  - UnMarshal は JSON 形式から戻せること

- defer
  - 関数が終了される前に実行されるようにしてくれるコード、defer が複数ある場合、一番最後に宣言されたコードから実行される(LIFO)

## データの型

### 整数型

- int8, int16, int32, int64: 符号付き整数
- uint8, uint16, uint32, uint64: 符号なし整数
- int, uint: プラットフォームに応じて 32 ビットまたは 64 ビット
- byte: uint8 のエイリアス
- rune: int32 のエイリアス（Unicode コードポイント用）

### 浮動小数点型

- float32: 32 ビット浮動小数点
- float64: 64 ビット浮動小数点
- complex64: float32 の実部と虚部を持つ複素数
- complex128: float64 の実部と虚部を持つ複素数

### 基本型

- bool: 真偽値（true/false）
- string: 文字列

### 複合データ型

- 配列（Array）

```go
var arr [3]int = [3]int{1, 2, 3}  // 固定長配列
```

- スライス（Slice）

```go
var slice []int = []int{1, 2, 3} // 可変長配列
slice := make([]int, 5) // 長さ 5 のスライスを作成
```

- マップ（Map）

```go
var myMap map[string]int = map[string]int{"a": 1, "b": 2}
emptyMap := make(map[string]int) // 空のマップを作成
```

- 構造体（Struct）

```go
type Person struct {
FirstName string
LastName string
}
person1 := Person{"田中", "太郎"}

// 空構造体の使用例
uniqueSet := make(map[int]struct{})
uniqueSet[1] = struct{}{}
```

- 参照型

```go
ポインタ（Pointer）

var num int = 42
var numPtr *int = &num
```

- 関数型（Function）

```go
var add func(int, int) int = func(a, b int) int { return a + b }
```

- チャネル（Channel）

```go
ch := make(chan int) // 双方向チャネル
ch := make(chan int, 10) // バッファサイズ 10 のチャネル
ch := make(chan<- int) // 送信専用チャネル
ch := make(<-chan int) // 受信専用チャネル
```

- インターフェース型：

```go
type Reader interface {
Read(p []byte) (n int, err error)
}
```

- カスタム型

```
type MyInt int
var custom MyInt = 42
```

## Goroutine

- Go 言語が提供する軽量スレッド
- 通常のスレッドとの違い
  - メモリ使用量が非常に少ない（初期サイズ約 2KB）
  - 作成と管理が高速
  - コンテキストスイッチングのコストが低い
  - Go ランタイムによる自動管理
- 主な使用場面
  - Web サーバーでの同時リクエスト処理
  - 大量データの並列処理
  - 独立した複数タスクの実行
  - 非同期 I/O 処理

```go
func main() {
    // goキーワードでゴルーチンを起動
    go someFunction()

    // 無名関数でも起動可能
    go func() {
        fmt.Println("新しいゴルーチンで実行中")
    }()
}


func main() {
    // チャネルの作成
    done := make(chan bool)

    // ゴルーチンで処理を実行
    go func() {
        fmt.Println("処理実行中...")
        time.Sleep(2 * time.Second)
        fmt.Println("処理完了!")
        done <- true
    }()

    // 処理完了を待機
    <-done
}
```

## pointer

```go
func main() {
    var x int = 42    // 通常の変数
    var p *int = &x   // ポインタ変数：xのメモリアドレスを格納

    fmt.Println(x)    // 42：xの値
    fmt.Println(p)    // 0xc0000aa058：xのメモリアドレス
    fmt.Println(*p)   // 42：pが指すアドレスの値

    *p = 100         // ポインタを介してxの値を変更
    fmt.Println(x)    // 100：xの値が変更されている
}
```

## Channel

- Web サーバーでの同時リクエスト処理

```go
func handleRequests(requests chan Request) {
    for request := range requests {
        go processRequest(request)  // 各リクエストを個別のゴルーチンで処理
    }
}

func processRequest(req Request) {
    // リクエスト処理ロジック
}
```

- ワーカープール（Worker Pool）の実装

```go
func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    // 3つのワーカーを生成
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }

    // ジョブの送信
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)

    // 結果の収集
    for a := 1; a <= 5; a++ {
        <-results
    }
}

func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        // 作業処理
        results <- j * 2
    }
}
```

- データパイプラインの構築

```go
func main() {
    // データ生成 -> 処理 -> 保存のパイプライン
    dataChannel := generateData()
    processedData := processData(dataChannel)
    saveData(processedData)
}

func generateData() <-chan int {
    out := make(chan int)
    go func() {
        for i := 0; i < 100; i++ {
            out <- i
        }
        close(out)
    }()
    return out
}

func processData(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}

func saveData(in <-chan int) {
   // ファイルを開く
   file, err := os.Create("data.txt")
   if err != nil {
       fmt.Println("ファイル作成エラー:", err)
       return
   }
   defer file.Close()

   // データを保存
   for num := range in {
       // 各数値を改行区切りで保存
       fmt.Fprintf(file, "%d\n", num)
   }

   fmt.Println("データの保存が完了しました")
}
```

タイムアウト処理

```go
select {
    case result := <-c:
        // 結果処理
    case <-time.After(5 * time.Second):
        // タイムアウト処理
}
```

## Goroutine + Channel

```go
// 複数のゴルーチンが同時に残高を参照・更新する可能性がある
// データ競合により、予期せぬ結果を引き起こす可能性がある
var balance = 1000  // 口座残高

func main() {
    // 問題のあるコード：データ競合が発生する可能性あり
    go withdraw(700)  // 引き出し処理
    go withdraw(500)  // 引き出し処理
    // ... メイン関数が終了
}

func withdraw(amount int) {
    // 残高チェックと引き出し処理が同時に実行される可能性がある
    if balance >= amount {
        balance = balance - amount
    }
}

// 正しい例
func main() {
    // チャネルの作成
    transactions := make(chan int)     // 取引用チャネル
    done := make(chan bool)           // 完了通知用チャネル

    // 残高管理用ゴルーチン
    go func() {
        balance := 1000               // 初期残高

        // transactionsチャネルからの取引要求を処理
        for amount := range transactions {
            if balance >= amount {
                balance -= amount
                fmt.Printf("引き出し成功: %d円, 残高: %d円\n", amount, balance)
            } else {
                fmt.Printf("残高不足: %d円, 現在の残高: %d円\n", amount, balance)
            }
        }

        // 処理完了をdoneチャネルに通知
        done <- true
    }()

    // 引き出し要求の送信
    go withdraw(transactions, 700)    // 700円の引き出し要求
    go withdraw(transactions, 500)    // 500円の引き出し要求

    // 処理完了を待機
    <-done
}

// 引き出し処理を行う関数
func withdraw(transactions chan int, amount int) {
    // 引き出し要求をチャネルに送信
    transactions <- amount
}
```
