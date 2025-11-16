---
sidebar_position: 3
---

# go_3

**Last updated:** _2025-07-14_

### interface(設計書)

- いろんな structure を同じタイプで使えるようにできる

```golang
type IFeeSummaryDb interface {
    GetFeeSummaries(...) (...)
}

// 全てIFeeSummaryDbで使える
&FeeSummaryDb{}
&MockFeeSummaryDb{}
&PostgresFeeSummaryDb{}
```

### structure(実際のコード)

- メソッドを絞る箱

```golang
// ❌ 関数はinterface作成不可
func GetFeeSummaries(...) {...}

// ✅ structure interface作成可能
type FeeSummaryDb struct {}
func (d *FeeSummaryDb) GetFeeSummaries(...) {...}
```

### constructor(Object 生成)

- 構造体を作ってインターフェースで返す

```golang
func NewFeeSummary() IFeeSummaryDb {
	return &FeeSummaryDb{}
}
```

## pattern

1. インターフェース方式

- インターフェース = メソッドの約束事を定義
- 異なる構造体が同じインターフェースを実装可能
- IsMovable メソッドを持つものは全て MoveStrategy として使用可能

2. メソッドチェーン方式

- 各メソッドが自分自身を返すのがポイント
- .Method1().Method2().Method3()のように連続呼び出し可能
- コードが自然語のように読める

```golang

// ============================================
// 1. インターフェース方式
// ============================================

// 戦略インターフェース定義
type MoveStrategy interface {
	IsMovable(input int) bool
}

// 偶数戦略
type EvenStrategy struct{}

func (e EvenStrategy) IsMovable(input int) bool {
	return input%2 == 0
}

// 奇数戦略
type OddStrategy struct{}

func (o OddStrategy) IsMovable(input int) bool {
	return input%2 == 1
}

// 車構造体
type Car struct {
	strategy MoveStrategy
	position int
}

func NewCar(strategy MoveStrategy) *Car {
	return &Car{strategy: strategy, position: 0}
}

func (c *Car) Move(input int) *Car {
	if c.strategy.IsMovable(input) {
		return &Car{c.strategy, c.position + 1}
	}
	return c
}

func (c *Car) GetPosition() int {
	return c.position
}

// ============================================
// 2. メソッドチェーン方式
// ============================================

// チェーン可能な車
type FluentCar struct {
	strategy MoveStrategy
	position int
}

func NewFluentCar() *FluentCar {
	return &FluentCar{position: 0}
}

// 戦略設定 - 自分自身を返す
func (c *FluentCar) WithStrategy(strategy MoveStrategy) *FluentCar {
	c.strategy = strategy
	return c // ポイント：自分を返す
}

// 移動 - 自分自身を返す
func (c *FluentCar) Move(input int) *FluentCar {
	if c.strategy != nil && c.strategy.IsMovable(input) {
		c.position++
	}
	return c // ポイント：自分を返す
}

func (c *FluentCar) GetPosition() int {
	return c.position
}

func main() {
	fmt.Println("=== インターフェース方式 ===")

	// 通常の使い方
	car1 := NewCar(EvenStrategy{})
	car1 = car1.Move(4) // 偶数なので移動
	car1 = car1.Move(3) // 奇数なので移動しない
	fmt.Printf("位置: %d\n", car1.GetPosition()) // 1

	fmt.Println("\n=== メソッドチェーン方式 ===")

	// チェーンで連続実行
	position := NewFluentCar().
		WithStrategy(EvenStrategy{}).
		Move(4). // 偶数なので移動
		Move(3). // 奇数なので移動しない
		Move(6). // 偶数なので移動
		GetPosition()

	fmt.Printf("位置: %d\n", position) // 2

	fmt.Println("\n=== 比較 ===")
	fmt.Println("インターフェース：タイプセーフ、多態性")
	fmt.Println("メソッドチェーン：読みやすい、連続処理")
}
```

- 追記

```golang
// ============================================
// 1. コンストラクタインジェクション (Constructor Injection)
// ============================================
type UserService struct {
   emailService EmailService // 必須依存性
}

func NewUserService(emailService EmailService) *UserService {
   return &UserService{
   	emailService: emailService,
   }
}

func (u *UserService) RegisterUser(username string) bool {
   fmt.Printf("ユーザー %s 登録\n", username)
   return u.emailService.SendEmail(fmt.Sprintf("%sさん、ようこそ！", username))
}
```
