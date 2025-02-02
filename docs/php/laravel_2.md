---
sidebar_position: 3
---

# laravel_2

**Last updated:** _2024-01-28_

## app/Http/Kernel

- カーネルは全ての HTTP リクエストの開始点であり、ミドルウェアの登録所
  - ミドルウェアの登録と管理
  - ミドルウェアグループの定義
  - 実行順序の制御

```php
<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * グローバルミドルウェア
     * すべてのHTTPリクエストに対して実行される
     */
    protected $middleware = [
        // プロキシの設定
        \App\Http\Middleware\TrustProxies::class,
        // CORSの処理
        \Illuminate\Http\Middleware\HandleCors::class,
        // メンテナンスモードのチェック
        \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
    ];

    /**
     * ミドルウェアグループ
     * Webルートと APIルートで使用される
     */
    protected $middlewareGroups = [
        // Webルート用ミドルウェア
        'web' => [
            // クッキーの暗号化
            \App\Http\Middleware\EncryptCookies::class,
            // セッションの開始
            \Illuminate\Session\Middleware\StartSession::class,
            // CSRFトークンの検証
            \App\Http\Middleware\VerifyCsrfToken::class,
        ],

        // APIルート用ミドルウェア
        'api' => [
            // APIリクエスト制限
            'throttle:api',
            // ルートモデルバインディング
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    /**
     * ルートミドルウェア
     * 個別のルートで使用できるミドルウェアのエイリアス
     */
    protected $routeMiddleware = [
        // 認証
        'auth' => \App\Http\Middleware\Authenticate::class,
        // 権限チェック
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        // ゲストユーザー用
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
    ];
}
```

## routes/api.php

- API エンドポイントを定義し、ミドルウェアを適用する場所です。
  - API エンドポイントの定義
  - ミドルウェアの適用指定
  - ルートのグループ化

```php
// routes/api.php
Route::middleware(['auth:api', 'throttle:60,1'])->group(function () {
    // ユーザー情報取得
    Route::get('/user', function () {
        return auth()->user();
    });

    // 投稿関連API
    Route::apiResource('posts', PostController::class);
});
```

## app/Http/Middleware

- ミドルウェアは、HTTP リクエストがコントローラーに到達する前に通過するフィルタリング層

  - ユーザー認証チェック
  - CORS ポリシーの適用
  - リクエストのログ記録
  - 入力データの検証
  - API リクエスト数の制限

- 特徴としては一個の Middleware の中で request に対した処理も、response に対した処理も全部入ってる
  - 関連するロジックを一箇所で管理（凝集度の向上）
  - リクエストとレスポンスのコンテキスト共有が可能
  - ミドルウェアの責任を明確にカプセル化

```php
namespace App\Http\Middleware;

use Closure;

class LogUserActivity
{
    public function handle($request, Closure $next)
    {
        // リクエスト時にログを記録
        Log::info('アクセスされたパス: ' . $request->path(), [
            'ip' => $request->ip(),
            'user_id' => auth()->id() ?? 'ゲスト'
        ]);

        // 次のミドルウェアまたはコントローラーにリクエストを渡す
        // $nextは次のミドルウェアやコントローラーにリクエストを渡すためのコールバック関数です
        // $nextがないと、リクエストの処理が途中で止まってしまいます
        $response = $next($request);

        // レスポンス送信前に追加処理が可能
        $response->headers->set('X-App-Version', '1.0.0');

        return $response;
    }
}
```

## app/Http/Resources

- Laravel におけるリソースは、モデルデータを API 応答に変換する際に使用される変換器（Transformer）

- データの一貫性

  - API 応答構造の標準化
  - フロントエンドとの契約維持

- データ変換

  - 日付フォーマット
  - 数値フォーマット
  - リレーションデータの構造化

- セキュリティ

  - 機密データのフィルタリング
  - 権限に応じたデータ制御

- 保守性

  - 応答構造の変更が容易
  - コードの再利用性向上

- 基本的な使い方

```php
// app/Http/Resources/UserResource.php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        // $this は User モデルのインスタンス
        // モデルデータを配列に変換
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
```

```php
class UserController extends Controller
{
    public function show(User $user)
    {
        // 単一ユーザーデータの返却
        return new UserResource($user);

        // 結果：
        // {
        //     "data": {
        //         "id": 1,
        //         "name": "山田太郎",
        //         "email": "yamada@example.com",
        //         "created_at": "2024-01-30 10:00:00"
        //     }
        // }
    }

    public function index()
    {
        $users = User::all();
        // 複数ユーザーデータの返却
        return UserResource::collection($users);
    }
}


// app/Http/Resources/UserResource.php
class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            // ユーザーの投稿情報も一緒に返却
            'posts' => PostResource::collection($this->posts),
            // 最終ログイン情報
            'last_login' => [
                'date' => $this->last_login_at,
                'ip' => $this->last_login_ip
            ]
        ];
    }
}

// app/Http/Resources/PostResource.php
class PostResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content
        ];
    }
}
```
