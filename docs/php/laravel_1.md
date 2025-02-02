---
sidebar_position: 2
---

# laravel_1

**Last updated:** _2024-01-17_

## Artisan とは？

- Laravel のコマンドラインインターフェイス（CLI）

- よく使われる機能
  - ファイル生成
    - コントローラー、モデル、ミドルウェアなどの生成
  - データベース管理
    - マイグレーションの実行
    - シーディングの実行
  - キャッシュ管理
    - 設定キャッシュのクリア
    - ビューキャッシュのクリア
  - 開発支援
    - 開発サーバーの起動
    - ルート一覧の確認

```bash
# コントローラーの作成
php artisan make:controller UserController

# マイグレーションの実行
php artisan migrate

# モデルの作成
php artisan make:model User

# 開発サーバーの起動
php artisan serve
```

## app/Console/Kernel.php

- 予約済みジョブ（スケジュールタスク）の定義
- Artisan コマンドの登録
- コンソールアプリケーションの起動プロセス管理

```php
// スケジュールタスクの定義
protected function schedule(Schedule $schedule)
{
    // 毎日深夜に実行
    $schedule->command('emails:send')->daily();

    // 毎時間実行
    $schedule->command('backup:clean')->hourly();
}

// Artisanコマンドの登録
protected function commands()
{
    $this->load(__DIR__.'/Commands');
}
```

## app/Exceptions/Handler.php

- エラー処理の一元管理
  - アプリケーション全体の例外処理
  - エラーレスポンスの標準化
  - ログ記録の管理
- API 処理での役割
  - エラーレスポンスを JSON 形式で返却
  - HTTP ステータスコードの適切な設定
  - エラーメッセージの整形
- 主な機能
  - 例外のキャッチと処理
  - エラーレスポンスのフォーマット
  - ログ記録の制御
  - カスタム例外処理の定義

```php
class Handler extends ExceptionHandler
{
    /**
     * ログに記録しない例外のリスト
     */
    protected $dontReport = [
        AuthenticationException::class,
        ValidationException::class,
        HttpException::class,
    ];

    /**
     * セッションに保存しない入力値のリスト -> frontendも含めて使う場合
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * 例外処理コールバックの登録
     */
    public function register(): void
    {

        // APIリクエストに対する例外処理
        $this->renderable(function (Throwable $e, $request) {
            if ($request->is('api/*')) {
                $status = $this->getHttpStatusCode($e);

                return response()->json([
                    'status' => 'error',
                    'message' => $this->getMessage($e),
                    'code' => $e->getCode(),
                    'errors' => $this->getErrors($e)
                ], $status);
            }
        });
    }

    /**
     * 認証エラーの処理
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        return $request->expectsJson()
            ? response()->json(['message' => '認証されていません。'], 401)
            : redirect()->guest(route('login'));
    }

    /**
     * HTTPステータスコードの取得
     */
    protected function getHttpStatusCode($e): int
    {
        if ($e instanceof HttpException) {
            return $e->getStatusCode();
        }
        if ($e instanceof ValidationException) {
            return 422;
        }
        if ($e instanceof AuthenticationException) {
            return 401;
        }
        return 500;
    }

    /**
     * エラーメッセージの取得
     */
    protected function getMessage($e): string
    {
        if (config('app.debug')) {
            return $e->getMessage();
        }
        return '処理中にエラーが発生しました。';
    }

    /**
     * バリデーションエラーの取得
     */
    protected function getErrors($e): ?array
    {
        if ($e instanceof ValidationException) {
            return $e->errors();
        }
        return null;
    }
}
```

## \の使い方

- \の場合は PHP の書き方、グローバルライブラリを使うための書き方に使われる。

```php
namespace App\Http\Controllers;

try {
    // データベース作業
} catch (\Exception $e) {  // ここでデータベースControllersのexceptionじゃなくて、普通なPHPのExceptionを使用するため
    DB::rollBack();
    return $this->error($e->getMessage());
}
```

## builder の使い方

1. インスタンス化する際に、必ずクエリビルダー（Builder）が必要
2. コンストラクタで受け取ったクエリを保存
3. その後、get()でクエリを実行し、map()で各データを処理

- クエリビルダーを注入 → クエリ実行 → データ処理という流れ

```php
// Builderを必須とするコンストラクタ
public function __construct(Builder $builder) {
    $this->builder = $builder;
}

// クエリの実行と処理
$data = $this->builder->get()->map(function ($item) {
    // 各行のデータ処理
});
```
