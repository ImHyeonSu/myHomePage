---
sidebar_position: 5
---

# laravel_4

**Last updated:** _2024-02-04_

## Laravel のリポジトリパターン

- 特徴
  - データアクセスロジックの集中管理
  - データベース実装の切り替えが容易
  - テストの実施が容易
  - コードの再利用性向上

```php
// インターフェース定義
interface UserRepositoryInterface {
    public function find($id);
    public function getActiveUsers();
}

// 実装クラス
class MySQLUserRepository implements UserRepositoryInterface {
    public function find($id) {
        return DB::table('users')->find($id);
    }

    public function getActiveUsers() {
        return User::where('active', 1)->get();
    }
}

// コントローラーでの使用
class UserController {
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function show($id) {
        return $this->userRepository->find($id);
    }
}

// ServiceProviderでの登録
class RepositoryServiceProvider extends ServiceProvider {
    public function register() {
        $this->app->bind(UserRepositoryInterface::class, MySQLUserRepository::class);
    }
}
```

## Laravel のビルダーパターン

- 特徴
  - クエリロジックを再利用可能なコンポーネントとして分離
  - テスト時にモックビルダーと置き換え可能
  - クエリ生成ロジックを一箇所で管理
  - コードの構造化とメンテナンスが容易

```php
class UserService {
    private $query;

    // Eloquentクエリビルダーを注入
    public function __construct(Builder $query) {
        $this->query = $query;
    }

    // アクティブユーザーの検索
    public function findActiveUsers() {
        return $this->query
            ->where('active', true)
            ->orderBy('created_at', 'desc')
            ->paginate(20);
    }

    // 名前による検索
    public function searchByName($name) {
        return $this->query
            ->where('name', 'like', "%{$name}%")
            ->get();
    }
}

// コントローラーでの使用例
class UserController {
    private $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }

    public function index() {
        return $this->userService->findActiveUsers();
    }
}
```

## Laravel のクラスコンストラクタ

- コードの構造化

  - クラスが必要とする依存関係が明確になります
  - 各コンポーネントの役割が明確になります

- テストの容易性

  - モックオブジェクトを使用したテストが簡単になります
  - 依存するサービスを置き換えやすくなります

- 保守性の向上

  - 依存関係の変更が一箇所で済みます
  - コードの見通しが良くなります

- 再利用性
  - 異なる実装への切り替えが容易になります
  - コードの柔軟性が高まります

```php
class UserController {
    private $userService;
    private $logger;

    public function __construct(UserService $userService, LogService $logger)
    {
        // 必要なサービスをプロパティに保存
        $this->userService = $userService;
        $this->logger = $logger;
    }

    public function store(Request $request)
    {
        // コンストラクタで保存したサービスを使用
        $user = $this->userService->createUser($request->all());

        // ログサービスを使用
        $this->logger->info('新規ユーザーが作成されました：' . $user->id);

        return redirect()->route('users.show', $user);
    }
}
```

## Laravelのビュー（View）システム
```php
// @yield ディレクティブは、「この部分は子ビューからコンテンツが提供される」という意味
<html>
<head>
    <title>@yield('title')</title>
</head>
<body>
    @yield('content')
</body>
</html>

// @extends('layouts.app')：「layouts.appテンプレートを基にして作成する」という宣言
// @section('title', 'welcome page')：メインビューのtitle yieldの部分に'welcome page'を挿入するという指示
// @section('content') ... @endsection：content yieldの部分に入れる内容を定義
@extends('layouts.app')
@section('title', 'welcome page')
@section('content')
<h1>~~~~~</h1>
@endsection
```