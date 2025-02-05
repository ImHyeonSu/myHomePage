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
