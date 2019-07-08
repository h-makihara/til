# docker meetup tokyo #31
https://speakerdeck.com/makocchi/kubecon-cncon-ossummit-china-2019-recap
## KubeCon CN報告
### https://cloudnativedays.jp/cndt2019/
- 20%off coupon  
dockerjp2020


### kubecon china
酷は中国語ではCoolを意味する

### lunchtime
HELLだったみたい

### LT
ラズパイ3台とスイッチにAPでクラスタ作ったお話

### 興味が湧いたやつ
12のFactorsと7のMissing factors

## 雰囲気でコンテナ使っているすべての人が読んで試すべきテキスト「コンテナ技術入門」の紹介」
https://speakerdeck.com/hamadakoji/fen-wei-qi-dekontenashi-tuteiru-quan-tefalseren-gadu-mubeki-kontenaji-shu-ru-men-falseshao-jie  
https://dev.classmethod.jp/tool/docker/container-basics/
### コンテナ技術入門
この記事すごくいいらしい
- 書かれていること  
コンテナを支えている要素技術  
Namespace  
cgroupとか  
Dockerコマンドを一切使わずコンテナを手で動かして作る  
実際にやってみてほしい  
VagrantやEC2で作る  
事前準備
cgroup でリソース制限  
Namespaceでリソース隔離  
- やって感じたこと  
しんどい  
知らないコマンドが多すぎ  
Dockerを知らないと面白くない  
結構な時間かかる
- 素晴らしいところ  
より深くDocker, コンテナを感じることができる  

## docker上で楽しむdokku
### 失敗談の話
- dokku  
Dockerを使ってherokuと同じ仕組みを提供

## RSAカンファレンスで聞いたコンテナセキュリティ
ネットワンの人
- コンテナ特化ベンダ  
Twistlock  
aqua
- 商用利用でのコンテナ利用者は多いがモニタリングやセキュリティ対策はまだ浸透してない

## Kubecon China から勉強したことのまとめ
- Migrating to Cloud-Native Application Architectures


## docker-composeを使って開発とデプロイしてみた
やっぱやってみたいなぁ  
お手軽開発環境構築 docker-compose.

## ガチ初心者がgkeでdockerを体験してみた
- GKEとは  
Kubernetes Engine で、Googleが管理しているもの  

## Kubernetes v1.15 における SIG Scheduling の取り組み（仮）
- Preemption  
Podに優先度を定義  
優先度が低いやつは出て行け  
Nodeのリソース不足の際に発動する  
- 優先度を上げるだけでは、バッチが優先して入っちゃう

- k8s 1.15  
NonPreenptingPriority  
新ポリシーの追加

## よく利用されてるImageに潜むセキュリティリスクをまとめた
- CIで使えるコンテナの脆弱性スキャナTrivy


## WEB上で楽しむdocker
DockerはGoで実装されてる  
https://speakerdeck.com/po3rin/play-dockerfile-on-web

dockerdot とてもおもしろそう
