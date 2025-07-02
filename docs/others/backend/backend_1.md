---
sidebar_position: 1
---

# back_end_1

**Last updated:** _2025-05-26_

## web server
- 性的なコンテンツ(HTML, CSS, JS, イメージなど)を提供する
- 動的なコンテンツを要求されたら、WASに要求を渡す
- Apache, Nginxなど

## WAS(Web Application Server)
- 動的なコンテンツを提供、DBのアクセスなどを処理する。
- 書く要求ごとに、スレッド生成される
- Javaなど

## HTTP(Hypertext Transfer Protocol) 
- WEBでクラアインととサーバーが通信するための規約
- HTTPは暗号化されてないデータを送る、セキュリティーに弱い
### HTTP/1.0
- １requestに対してTCPが生まれる、毎回のrequestに対して生まれるからオーバーヘッドが発生
### HTTP/1.1
- HTTP/1.0の問題を指定した時間間はコネクションを終了させない方式で解決してた
- Head-of-Line Blocking(HOL Blocking) 、パイプライニングを支援して、requestを貯めてサーバーに送信してそれに対して回答をまつ
    - 最初のパイプラインのrequestからエラーなどで時間がかかると次のパイプラインは実行されなかったりしているようになる
### HTTP/2.0
- HTTP/1.1はメッセージをテキストで送信してたことに対して、2.0はバイナリーで送信してる
    - パーシング、送信速度が早くなる
- 1つのコネクションで複数のリクエストを並列処理できる。
    - HOLブロッキング問題が解決され、HPACK圧縮で重複するヘッダーを効率化し、帯域幅使用量も最適化

## HTTPS(Hypertext Transfer Protocol Secure)
- HTTPにデータ暗号化が追加されてる規約
- 適用するためには(Certificate Authority, CA)から認証をもらわないといけない
    - CAを申請すると、CAの情報を持ってる認証が発行される
    - CAを個人期に暗号化してサーバーに送信
- 動作原理(TLS handshake)
    - クライアントの情報をサーバーに送信
    - サーバーはクライアントにサーバーの情報を送信
    - クライアントはサーバーの認証をCA公開キーに復号化して検証
    - 検証後、クライアントはサーバーから生成されたPre Master Secretの値を生成する
    - サーバーの公開キーに暗号化してサーバーに送信
    - サーバーはもらった暗号化のデータを個人キーに復号してPre Master Secretを取得