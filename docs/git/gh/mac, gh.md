---
sidebar_position: 3
---

## 複数の gitHub アカウントを扱う方法

1. gh auth login
   -> ログインしたら、そのログインの情報が ~/.config/gh/hosts.yml ファイルに残る

2. cp -f ~/.config/gh/hosts.yml ~/.config/gh/hosts.yml.$GITHUB_ID_01
   -> hosts.yml ファイルをコピして新しい switch 専用のファイルを作成

3. hosts.yml ファイルの削除

4. gh auth login, cp -f ~/.config/gh/hosts.yml ~/.config/gh/hosts.yml.$GITHUB_ID_02
   ->また switch するアカウントで繰り返す。

5. gh alias set --shell $GITHUB_ID_01 "cp ~/.config/gh/hosts.yml.$GITHUB_ID_01 ~/.config/gh/hosts.yml && gh auth setup-git && gh auth status && git config --global user.name $GITHUB_ID_01 && git config --global user.email $GITHUB_EMAIL_01"

6. gh alias set --shell $GITHUB_ID_02 "cp ~/.config/gh/hosts.yml.$GITHUB_ID_02 ~/.config/gh/hosts.yml && gh auth setup-git && gh auth status && git config --global user.name $GITHUB_ID_02 && git config --global user.email $GITHUB_EMAIL_02"

7. gh alias listb
   -> alias がちゃんと設定されてたのかを確認することで完了

8. switch の方法

```
> gh $GITHUB_ID_01                                                       
github.com
  ✓ Logged in to github.com as axgo.tistroy.com (/Users/axgo/.config/gh/hosts.yml)
  ✓ Git operations for github.com configured to use https protocol.
  ✓ Token: ghp_************************************
  ✓ Token scopes: admin:enterprise, admin:gpg_key, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, admin:ssh_signing_key, audit_log, gist, notifications, project, repo, user, workflow

> gh $GITHUB_ID_02                                     
github.com
  ✓ Logged in to github.com as axgo.tistroy.com (/Users/axgo/.config/gh/hosts.yml)
  ✓ Git operations for github.com configured to use https protocol.
  ✓ Token: ghp_************************************
  ✓ Token scopes: admin:enterprise, admin:gpg_key, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, admin:ssh_signing_key, audit_log, gist, notifications, project, repo, user, workflow
```
