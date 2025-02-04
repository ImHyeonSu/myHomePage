---
sidebar_position: 4
---

# laravel_3

**Last updated:** _2024-02-03_

## Model の boot,booted

0. boot() 実行 -> booted() 実行 -> (\_\_construct) 実行
1. boot()メソッド
   - モデルのライフサイクルイベントを管理
   - データベース操作の前後で処理を実行
   - parent::boot()の呼び出しが必須
   - データ検証、自動値設定、ログ記録などに使用
2. booted()メソッド
   - モデルブート完了後に実行
   - グローバルスコープの定義に特化
   - すべてのクエリに自動的に条件を適用
   - parent::booted()の呼び出しは任意
3. 結果としてできること
   - モデル作成時の自動処理
   - データの一貫性維持
   - ビジネスロジックの自動化
   - セキュリティルールの適用
   - 関連処理の自動化

```php
protected static function boot()
{
    parent::boot();

    // モデル作成前
    static::creating(function($model) {
        $model->uuid = Str::uuid();
        $model->created_by = Auth::id();
    });

    // モデル作成後
    static::created(function($model) {
        $model->profile()->create([]);
        event(new UserCreated($model));
    });

    // 保存前
    static::saving(function($model) {
        $model->email = strtolower($model->email);
    });

    // 保存後
    static::saved(function($model) {
        Cache::tags(['users'])->flush();
    });

    // 更新前
    static::updating(function($model) {
        Log::info('更新内容:', $model->getDirty());
    });

    // 削除前
    static::deleting(function($model) {
        $model->profiles->each->delete();
    });
}

protected static function booted()
{
    // アクティブユーザーのみ取得
    static::addGlobalScope('active', function ($query) {
        $query->where('active', true);
    });

    // 組織フィルター
    static::addGlobalScope('organization', function ($query) {
        if (Auth::check()) {
            $query->where('organization_id', Auth::user()->organization_id);
        }
    });
}
```

## Model の削除関連

```php
// delete()メソッドを呼び出すと、レコードは物理的に削除されず、deleted_atに削除日時が設定される
use SoftDeletes;

// ソフトデリート実行
$user->delete();

// ソフトデリートされたレコードを含めて取得
User::withTrashed()->get();

// ソフトデリートされたレコードのみ取得
User::onlyTrashed()->get();

// 完全削除
$user->forceDelete();

// 復元
$user->restore();
```

## Model の$casts

- データベースから取得時に自動的に型変換
- モデル保存時にデータベースに適した形式に自動変換
- データの一貫性を保持
- 型の安全性を確保

```php
// boolean: true/falseに変換
// integer: 整数に変換
// float/double: 浮動小数点に変換
// string: 文字列に変換
// array: JSON文字列を配列に変換
// json: JSON文字列をオブジェクトに変換
// datetime: Carbon インスタンスに変換
// collection: コレクションに変換
// decimal: 指定した桁数の小数に変換
protected $casts = [
    'is_active' => 'boolean',
    'price' => 'integer',
    'published_at' => 'datetime',
    'options' => 'array',
    'data' => 'json',
    'settings' => 'collection',
    'birthday' => 'date',
    'amount' => 'decimal:2'
];
```

## Model の$casts

- fillable は Mass Assignment（一括代入）で許可する属性を定義

```php
protected $fillable = [
    'name',
    'email',
    'password',
    'age'
];

// 許可
User::create([
    'name' => 'John',
    'email' => 'john@example.com'
]);

// 一括代入
$user->fill($request->all());

protected $guarded = ['id']; // id以外のフィールドを許可
```

## Model の$casts
```php
class Product extends Model
{
	protected $appends = ['formatted_price'];
	
	public function getFormattedPriceAttribute()
	{
		return 'w'.number_format($this->price);
	}
}

// 以下のように実行すると自動的に　formatted_priceがつく
$product->formatted_price; 
$product->toArray(); 
$product->getFormattedPriceAttribute();

// 結果
[
'id' => 1,
'name' => 'Example Product',
'price' => 15000,
'formatted_price' => 'w 15.000',
]
```