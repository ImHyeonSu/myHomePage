---
sidebar_position: 2
---

# front_end_2

**Last updated:** _2025-05-27_

## Semantic Markup
- HTML要素を意味に合わせて使用すること
- 各要素が持つ意味と構造を考慮してマークアップする方式
- divタグなどではなくheader、nav、mainなどのタグ
- 検索エンジンがコンテンツの意味をより良く把握できる(SEO効果)
- コードの意味が明確で開発者が理解しやすい(保守性)
- 標準に準拠したマークアップで様々な環境で一貫した動作

## CORS(Cross-Origin Resource Sharing)
- 違うURLからの接続も許容する使い方
    - 基本的にURLはProtocol、ホストネーム、ポト、パスネームなどで決まっている
    - protocolからポトまでがOrigin、ホストネームとポトはホスト
    - Originのうち一個でも違ったらCORSエラーが発生する
```
protocol//hostname:port/pathname
https://myshoe.com:8080/path/page
```
- バック側から以下をせってすることでCORSエラーを下げるkとができる
```
// 全部許容してしまう
'Access-Control-Allow-Origin': <origin> | *
// 大体は以下のように絞って許容する
'Access-Control-Allow-Origin': https://myshop.com
```