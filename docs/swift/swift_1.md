---
sidebar_position: 1
---

# swift_1

**Last updated:** _2023-11-11_

## outlet

1. オブジェクトに対して設定をするための書き方

```swift
// IBは Interface Builderに関わってる変数、関数の指定する時使う。
// UILabelは宣言しようとしている変数のタイプ
// strong/weak memory関数の政策を意味している
@IBOutlet var lblHello: UILabel! // memoryが削除されないままずっと残る
@IBOutlet weak　var lblHello: UILabel! // memoryが削除できる
```

## Action

```swift
@IBAction func btnSend(_ sender: UIButton){
  lblHello.text = "Hello, " + txtName.text!
}
```

## viewDidLoad()

1. 親クラス（UIViewController）の viewDidLoad()メソッドを呼び出すもの

実行順序：

1. 子クラスの viewDidLoad()が呼ばれる
2. super.viewDidLoad()で親の初期化処理を実行
3. その後、子クラスの追加設定を実行

```swift
    override func viewDidLoad() {
        // 1. ここで ChildViewControllerの viewDidLoad()がはじまる

        super.viewDidLoad()
        // 2. おや(UIViewController)の viewDidLoad() 実行

        // 3. したは ChildViewControllerだけの追加設定
        setupUI()
        fetchData()
    }
```

## @objc

1. Swift コードを Objective-C ランタイムで使用可能にするアノテーション

使用される場面：

1. Selector を使用するメソッド（例：Timer、Target-Action パターン）
2. Objective-C コードから Swift メソッドを呼び出す場合
3. NSObject を継承するクラスのメソッド

主な機能：

1. Swift のメソッドやプロパティを Objective-C ランタイムに公開
2. 動的ディスパッチの有効化

```swift
@objc func updateTime() {
    let date = NSDate() // このコードではこの部分
    let formatter = DateFormatter()
    formatter.dateFormat = "yyyy-MM-dd HH:mm:ss EEE"
    lblCurrentTime.text = "選択時間： " + formatter.string(from: date as Date)
}
```

## method の under バー

```swift
// 1. underbarあり
func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int)

pickerView(myPickerView, numberOfRowsInComponent: 0)


// 1. underbarなし
func pickerView(pickerView: UIPickerView, numberOfRowsInComponent component: Int)

pickerView(pickerView: myPickerView, numberOfRowsInComponent: 0)
```

## delegate

- swift の uilibrary の処理フローのパターン？

- 概念は UI は表示だけ delegate は UI のイベントに対しての処理をどうするかを書いて処理する

- AppDelegate
  - アプリ全体の lifecycle 管理
  - アプリのイベント処理
  - background 作業、push アラム処理
- SceneDelegate
  - UI の lifecycle
  - Scene のイベント処理

```swift
// 1. 基本設定: delegateを選択
class ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource {

   // pickerview
   @IBOutlet var pickerView: UIPickerView!

   // 出すデータ
   let data = ["りんご", "バナナ", "ぶどう", "もも"]

   override func viewDidLoad() {
       super.viewDidLoad()
       // 2.uiに対して、delegate処理をすると宣言
       // selfは現在のクラスインスタンスを示す。
       pickerView.delegate = self
       pickerView.dataSource = self
   }

   // 3. pickerviewの表示設定
   // 列の数
   func numberOfComponents(in pickerView: UIPickerView) -> Int {
       return 1
   }

   // 列の行数
   func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
       return data.count
   }

   // 角行に表示される中身
   func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
       return data[row]
   }

   // 4. 選択された時の処理
   func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
       print("選択したもの:", data[row])
   }
```

## info.plist

アプリの重要な設定を保存するファイル

1. appstore の関連
   - version 管理
   - 支援機械設定
2. security
   - https の例外処理
   - アプリのアクセス権限
3. 権限回り
   - hardware(カメラ、gps など),service アクセス管理
   - 権限を申し込む時の表示メッセージなど
4. UI/UX
   - 画面の向き
   - スタト画面設定
   - statusbar スタイル

## protocol

- protocol は特定の object が持っている機能と属性の設計図

```swift
// protocol宣言したら必ず addを呼び出さないといけない
protocol Calculator {
    func add(op1 : Int, op2 : Int) -> Int
}
```

## swift で使われてる DB の種類

1.  UserDefaults

    - clents の基本設定情報が保存される DB
    - 普通な DB として使うのはよろしくない、あくまでも設定情報などのための DB
    - 全てのデータは plist から管理される

2.  keychain

    - 暗礁番号など安全性が必要なデータを暗号化された DB に保存する形

3.  File Manager

    - File System(ファイルをよく使えるために保存、設定する仕組み)のコンテンツに対する interface、アプ r のファイルを読み取ってくれる
    - sandbox(アプリの構図、アプリは一つの sandbox の中に格納される。bundle, data container, icloud container などの構図を持つようになる。)にアクセスするための仕組みが File Manager

4.  Core Data

    - Core Data は非常にシンプルでありながら強力なツールで、基本的なデー- タモデルから複雑な形式まで、あらゆる形式のデータを保存することができる
    - オブジェクトグラフ管理 = オブジェクト間の関係性を維持・管理
    - 属性（アトリビュート）= オブジェクトが持つ基本的なデータ
    - リレーションシップ = オブジェクト間のつながり
    - データモデル = データの構造を定義したもの
    - CloudKit を利用して、機械が切り替わってもデータが維持される

## CocoaPods

- iosProject の依存性管理
- Ruby 言語、外部ライブラリを簡単に import できる
- 構図
  - Podfile：ライブラリの一覧
  - Podfile.lock：ライブラリの version 管理
  - .xcworkspace：CocoaPdos の作業空間
  - command
    - pod install： Podfile.lock の install
    - pod update： 最新 version
