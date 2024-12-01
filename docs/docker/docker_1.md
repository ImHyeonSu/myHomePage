---
sidebar_position: 1
---

# docker_1

**Last updated:** _2023-12-17_

## container

ソフトウェアアプリ、アプリの環境をパッケージ化する技術

1. Isolation
   - container は隔離されている状況で実行される、各 container は他の container とホストシステムなどとは
   - 関わらず実行される → 個別の環境を持つ
2. Portability
   - container はどんな環境でも同じ動作ができる
3. Lightweight
   - 仮想化技術を利用している、全体仮想マシンより速い
4. Automation
   - イメージでパッケージ化されているので、アプリをより早く構築してリリースできる
   - →CI・CD と合わせて自動化プロセスを構成できる
5. Scalability
   - container は必要に応じて拡張できる、複数の container インスタンスを作って分散されている環境で
   - アプリ実行可能

## command

- docker-compose up
- docker-compose up -d バックグラウンド実行
- docker-compose up (service-name) - 特定 service だけ実行、docker-compose.yml に定義された service を実行すること
- docker-compose down
- docker-compose rm
- docker-compose exec
- docker-compose exec (service-name) (command)
- docker logs --details
- docker logs --tail(最後 10 行だけ)
- docker logs(全てのログ)
- docker ps -a(docker の立ち上げ状況などまで含めて確認できる)

## DockerFile

```shell
# ベースイメージ選択、FrameWorkなどを選択できる
FROM node:14.18.0

# env設定、NODE_ENVはNode.jsから使われてる、developmentという環境だと示す
ENV NODE_ENV development

#作業Directory設定
WORKDIR /app

#package.jsonをコピする→イメージファイルの追加
COPY package*.json ./

#package-lock.jsonファイル実行
RUN npm ci

#上位Directoryの全てをcontainer作業Direcotryにコピ
COPY . .

#package.jsonを実行
RUN npm run build

# ビルド環境
FROM nginx:stable-alpine

#仮想環境にdefault.confを追加
ADD ./docker/it-01/default.conf /etc/nginx/conf.d/default.conf

# default.confはNginxはウェブサーバーの設定ファイルでcontainer上で実行するために
# Nginxはクライアントとバックエンドサーバーの間に位置して、クライアントの要望をバックエンドに渡すRevers proxicに使える
COPY --from=build-it-01 /app/dist /usr/share/nginx/html

#port指定
EXPOSE 80

#containerが実行されるとき、実行するコマンド
CMD ["nginx", "-g", "daemon off;"]
```
