---
sidebar_position: 6
---

# laravel_5

**Last updated:** _2024-02-06_

## laravel のポリモーフィックリレーション

```php
// ->このように自動的に生成さらるカラムを関係性の紐付きとして使える、ララベルから自動的に認識でき
Schema::create('images', function (Blueprint $table) {
    $table->id();
    $table->string('url');
    $table->morphs('imageable');  // カラム自動生成
    // imageable_id (unsignedBigInteger)
    // imageable_type (string)
});


1つのImageモデルとテーブルで全ての画像を管理できる
新しいモデルへの画像機能の追加が容易　
画像処理ロジックを一箇所で一貫して管理可能
データベース構造がシンプルで効率的

class Image extends Model {
    public function imageable() {
        // どのモデルとも関連付け可能な関係を定義
        return $this->morphTo();
    }
}

class Post extends Model {
    public function image() {
        // 投稿が1つの画像を持つことを定義
        return $this->morphOne(Image::class, 'imageable');
    }
}

class User extends Model {
    public function image() {
        // ユーザーが1つの画像を持つことを定義
        return $this->morphOne(Image::class, 'imageable');
    }
}

// 投稿に画像を追加
$post->image()->create(['url' => 'post.jpg']);
// データベースには以下のように保存されます：
// imageable_id = 投稿のID
// imageable_type = 'App\Models\Post'

// ユーザープロフィール画像を追加
$user->image()->create(['url' => 'profile.jpg']);
// データベースには以下のように保存されます：
// imageable_id = ユーザーのID
// imageable_type = 'App\Models\User'
```

## laravel の with

```php
$users = User::with('posts')->get();
$users = User::with('posts:id,title')->get();

->効率的に選択する、以下のようなSQLになる
SELECT * FROM users;
SELECT id, title, user_id FROM posts
WHERE user_id IN (1, 2, 3, ...);
```

## laravel の pluck

- pluck はデータからあるカラムの部分で配列を作ること

```php

$names = DB::table('users')->pluck('name');
id | name  | email           | age
1  | John  | john@test.com  | 25
2  | Jane  | jane@test.com  | 30
3  | Bob   | bob@test.com   | 28

['John', 'Jane', 'Bob']
```

## laravel のクエリスコープ

- クエリスコープは、頻繁に使用するクエリ条件をモデルにメソッドとして定義し、再利用可能にする機能
  - コードの再利用性：よく使うクエリ条件を一度定義して複数箇所で使用できる
  - 可読性の向上：複雑なクエリ条件を意味のある名前のメソッドで表現できる
  - メンテナンスの容易さ：クエリ条件を一箇所で管理できるため、修正が必要な際に便利
  - チェーン可能：複数のスコープを連結して複雑なクエリを構成できる

```php

class User extends Model
{
    // scope + IsAdmin：スコープメソッドの定義
    public function scopeIsAdmin($query)
    {
        return $query->where('is_admin', true);
    }

    // 他の条件のスコープも定義可能
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}

// 使用方法
$admins = User::isAdmin()->get();  // is_admin = trueのユーザーのみ取得
$activeAdmins = User::isAdmin()->active()->get();  // アクティブな管理者のみ取得
```
