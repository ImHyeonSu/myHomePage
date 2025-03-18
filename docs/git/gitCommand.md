---
sidebar_position: 1
---

# gitCommand


**Last updated:** _2024-03-10_

・origin は remoteRepository の別名

・現在作業しているブランチを認識させる
HEAD->[ブランチ名]

・git remote の最新化
```
git remote update
```

・remoteRepository からの変更事項をただ持ってくる、ロカルに変更事項が反映はされない状態
```
git fetch
```

・remoteRepository からの変更事項を合併
```
git pull
```

・commitをリセットする
```
git reset HEAD^
 -> 4個まえのコミットまで戻す

git reset --soft, -- mixed, --hard -> 三つのoptionがある。
--soft -> ただ戻すことだけ
--mixed -> これがdefault
--hard -> ファイルの修正なども完全になくなる、復旧できない状態になる

git push -f origin main -> 履歴を最新化

git push origin HEAD --force -> 強制push
```

・ブランチ作成
```
git branch (branchname)
```

・ローカルのブランチを削除する場合
```
git branch -d localBranchName
```

・リモートのブランチを削除する場合
```git
git push origin --delete remoteBranchName
```

・コンフリクトが発生した場合
```
git pull origin && git merge
```

・ブランチ移動
```
git switch == git checkout
```

・タグ
```
git tag タグ
git push origin タグ名
git tag -d タグ名 -> pushしてない場合
```

・stash
```
git stash
git stash list
git stash save stash名
git stash applay stash{0}
```

・tag
```
git tag タグ
git push origin タグ名
git tag -d タグ名
```