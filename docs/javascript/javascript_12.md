---
sidebar_position: 12
---

# javascript_12

**Last updated:** \_2025-08-16

## TypeScript infer

- infer は条件付き型内で型を推論するキーワード
- TypeScript が自動的に型を判断
- 必ず extends と一緒に使用

```javascript
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 使用例
type StrType = GetReturnType<() => string>;   // string
type NumType = GetReturnType<() => number>;   // number
```

### never タイプ

- never = 「絶対に存在しない型」

```javascript
// ❌ 値の代入不可
const value: never = "hello";  // Error!

// ✅ Union型では自動削除
type Result = string | never;  // string

// ✅ 型フィルタリングに活用
type StringsOnly<T> = T extends string ? T : never;
type Filtered = StringsOnly<string | number>;  // string



type ApiResponse<T, E = never> =
  E extends never
    ? { success: true; data: T }
    : { success: false; error: E };

type Success = ApiResponse<User>;              // {success: true, data: User}
type Failure = ApiResponse<User, "Error">;     // {success: false, error: "Error"}

// エラー
type DetailedError = ApiResponse<User, {code: number, message: string}>;
// 失敗したら: { success: false; error: {code: number, message: string} }

// エラー
type MultiError = ApiResponse<User, "NotFound" | "Unauthorized" | "ServerError">;
// 失敗したらƒ: { success: false; error: "NotFound" | "Unauthorized" | "ServerError" }
```
