---
sidebar_position: 7
---

# react_7

**Last updated:** _2025-06-10_

## React.memoのuseMemo
- コンポーネントのpropsが変更されな限り再レンダーを止める機能
- 値自体の変更
- 強制的な再レンダーにも値は変更なし
```javascript
function UserProfile({ userId, preferences }) {
  // ❌ 毎回新しいデータ作成
  const userConfig = {
    id: userId,
    theme: preferences.theme,
    language: preferences.language,
    notifications: filterNotifications(preferences.notifications)
  };

  // ✅ 関わってる値が変わる時だけ、修正してレンダーする
  const memoizedConfig = useMemo(() => ({
    id: userId,
    theme: preferences.theme,
    language: preferences.language,
    notifications: filterNotifications(preferences.notifications)
  }), [userId, preferences.theme, preferences.language, preferences.notifications]);

  return <UserSettings config={memoizedConfig} />;
}
```
## useCallback
- 関数自体の変更
- 強制的な再レンダーにも関数は変更なし
```javascript
  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  const memoizedHandleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);
```