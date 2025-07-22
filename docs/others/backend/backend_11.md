---
sidebar_position: 11
---

# back_end_11

**Last updated:** _2025-07-22_

##　 Test Double

- テストにおいて実際の依存関係を置き換える偽のオブジェクトです。映画のスタントダブル（影武者）のように、本物の代わりに使用
- 外部システムへの副作用を防ぐ（実際のメール送信、データベース変更など）
- 外部環境に依存しない安定したテストの実現
- 複雑な設定や準備作業の簡略化
- テストの実行速度向上
- 特定の条件やエラー状況の再現

1. Dummy（ダミー）

```python
"""
ダミーは最もシンプルなテストダブルです。
メソッドの引数として渡すオブジェクトが必要だが、実際には使われない場合に使用します。
"""

class DummyEmailService(EmailServiceInterface):
    def send_email(self, to: str, message: str) -> bool:
        pass  # 何もしない、戻り値も返さない

# 使用例
def test_with_dummy():
    dummy = DummyEmailService()
```

2. Stub（スタブ）

```python
"""
スタブは予め決められた応答を返します。
テストで特定の条件を作り出したい時に使用します。
"""

class StubEmailService(EmailServiceInterface):
    def __init__(self, should_succeed: bool = True):
        self.should_succeed = should_succeed

    def send_email(self, to: str, message: str) -> bool:
        return self.should_succeed  # 常に設定された値を返す

# 使用例
def test_with_stub():
    # 成功するケース
    success_stub = StubEmailService(should_succeed=True)
    result = success_stub.send_email("test@example.com", "Hello")
    assert result == True

    # 失敗するケース
    failure_stub = StubEmailService(should_succeed=False)
    result = failure_stub.send_email("test@example.com", "Hello")
    assert result == False
```

3. Fake（フェイク）

```python
"""
フェイクは実際に動作しますが、本番環境では使えないシンプルな実装です。
例：メモリ内データベース、ファイルシステムの代わりにメモリ使用など
"""

class FakeEmailService(EmailServiceInterface):
    def __init__(self):
        self.sent_emails = []  # メモリ内にメール履歴を保存

    def send_email(self, to: str, message: str) -> bool:
        # 実際には送信せず、メモリに保存するだけ
        self.sent_emails.append({"to": to, "message": message})
        return True

    def get_sent_emails(self):
        return self.sent_emails

# 使用例
def test_with_fake():
    fake = FakeEmailService()

    # メールを「送信」
    fake.send_email("user1@example.com", "Welcome!")
    fake.send_email("user2@example.com", "Thank you!")

    # 送信されたメールを確認
    sent = fake.get_sent_emails()
    assert len(sent) == 2
    assert sent[0]["to"] == "user1@example.com"
    assert "Welcome!" in sent[0]["message"]

```

4. Spy（スパイ）

```python
"""
スパイは呼び出された情報を記録します。
どのメソッドが何回、どんな引数で呼び出されたかを後で検証できます。
"""

class SpyEmailService(EmailServiceInterface):
    def __init__(self):
        self.call_count = 0
        self.call_history = []
        self.last_call_args = None

    def send_email(self, to: str, message: str) -> bool:
        # 呼び出し情報を記録
        self.call_count += 1
        self.call_history.append({"to": to, "message": message})
        self.last_call_args = (to, message)
        return True

    def was_called(self) -> bool:
        return self.call_count > 0

    def was_called_with(self, to: str, message: str) -> bool:
        return (to, message) in [(call["to"], call["message"]) for call in self.call_history]

# 使用例
def test_with_spy():
    spy = SpyEmailService()

    # メソッドを呼び出し
    spy.send_email("admin@example.com", "Alert!")

    # 呼び出し状況を検証
    assert spy.was_called()
    assert spy.call_count == 1
    assert spy.was_called_with("admin@example.com", "Alert!")
```

5. Mock（モック）

```python
"""
モックは最も高機能なテストダブルです。
期待される呼び出しを事前に設定し、期待通りに呼ばれたかを検証します。
期待と異なる呼び出しがあった場合は例外を発生させることもあります。
"""

# Pythonの unittest.mock を使用した例
def test_with_mock():
    # モックオブジェクトを作成
    mock_email = Mock(spec=EmailServiceInterface)

    # 戻り値を設定
    mock_email.send_email.return_value = True

    # メソッドを呼び出し
    result = mock_email.send_email("boss@example.com", "Report")

    # 結果の検証
    assert result == True

    # 呼び出しが期待通りだったかを検証
    mock_email.send_email.assert_called_once_with("boss@example.com", "Report")

# 手動でモックを実装した例
class MockEmailService(EmailServiceInterface):
    def __init__(self):
        self.expected_calls = []
        self.actual_calls = []
        self.return_value = True

    def expect_call(self, to: str, message: str):
        """期待する呼び出しを設定"""
        self.expected_calls.append((to, message))

    def send_email(self, to: str, message: str) -> bool:
        self.actual_calls.append((to, message))
        return self.return_value

    def verify(self):
        """期待通りに呼ばれたかを検証"""
        if self.expected_calls != self.actual_calls:
            raise AssertionError(f"期待: {self.expected_calls}, 実際: {self.actual_calls}")

# 使用例
def test_with_manual_mock():
    mock = MockEmailService()

    # 期待する呼び出しを設定
    mock.expect_call("client@example.com", "Invoice")

    # 実際に呼び出し
    mock.send_email("client@example.com", "Invoice")

    # 検証（期待と異なれば例外が発生）
    mock.verify()
```
