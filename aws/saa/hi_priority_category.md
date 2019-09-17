# コンピューティング
## 優先度高
### Amazon EC2

### Amazon EC2 Auto Scaling
高可用性を保つ構成を作る
### AWS Lambda
サーバレスという機能を用いて、データ処理として機能させ、コストを下げたりする

### Elastic Load Balancing
ELB　ロードバランサ機能
トラフィック分割やヘルスチェックをして止まったサーバを動いているサーバに移動するなど

## 優先度低
### Amazon Elastic Container Service
ECS　DockerをつかってCI CDを使って開発する

### AWS Elastic Beanstalk
サーバ構築を自動化して管理してくれるサービス
EC2をテンプレート化していく、監視していく
といった処理を自動化する

# ストレージ
データを蓄える
## 優先度高
### Amazon Simple Storage Service(S3)
間違いなく出てくる  
EC2と同列で出てくる  
スケーラブルなクラウドストレージ
### Amazon Elastic Block Store (EBS)
こちらも確実に出てくる
EC2を立ち上げると、EBSをストレージとして指定する

### Amazon Glacier
S3より低コストで長期保存したいものを保存するストレージ
S3と併用したりする

## 優先度低
### Amazon Elastic File System (EFS)
フルマネージドファイルシステム  

### AWS Storage Gateway
ハイブリッドでストレージを統合していくGateway機能を提供

# データベース
## 優先度高
### Amazon RDS
一番ベーシック  
SQLサーバやOracleサーバなど  
AWSでDB使うとなるとこれを候補に上がる  

### Amazon DynamoDB
NoSQLで使い勝手がいい処理を使いたい  
使い方の差をRDSと比較して覚えておくべき

### Amazon ElastiCache
キャッシュデータを蓄える  
より可用性の高いアーキテクチャを設計していく  
使い方を覚えておく

## 優先度低
### Amazon Aurora
高性能でマネージドでリレーショナルDBを提供  


### Amazon Redshift
データウェアハウスを提供


# ネットワーク
## 優先度高
これらは100%出題される
### Amazon VPC
Amazon上でネットワークを作ってサーバを配置する  
AWS使うなら必ず使う  

### Amazon Route 53
DNSを提供する  
どう使えばいいかまできちんと理解する  
## 優先度低
### Amazon API Gateway
APIを構築しデプロイして管理する  

### Amazon CloudFront
コンテンツ配信

### AWS Dierct Connect
Amazonとオンプレをつなぎたい場合は専用線接続をする  

# マネージメントとガバナンス
## 優先度高
### Amazon CloudWatch
リソースとアプリケーションのモニタリング  

### AWS マネジメントコンソール
AWSを触ると必ず一番最初に使うもの  
自然と慣れていくもので、テストに出るものではない

### AWS Auto Scaling
EC2でも出てきたが、全体のオートスケーリング機能を自動でやってくれる


## 優先度低
### AWS CloudTrail
ログ管理  
ユーザがどのような行動をしたかのユーザログ
### AWS Well-Architected Tool
5つの設計減速をどう守るべきかを支援してくれるツール郡

### AWS Config
リソースの変更情報

### AWS CloudFormation
テンプレートを使ってリソースの管理を自動化してくれる

### AWS OpsWorks
Chefなどを使って運用を自動化する  
試験範囲としては詳細は出ない

### AWS Trusted Advisor
パフォーマンスやセキュリティを最適化してくれる  
アドバイスや助言をくれる  
使い方を知っておく

# セキュリティ、アイデンティティ、コンプライアンス
## 優先度高
### AWS Identity & Access Management
ユーザアクセスの権限を管理者が管理する  
一番最初にAWSでやらなければならないので、間違いなく出る

## 優先度低
### AWS Directory Service
Active DirectoryをAWS上で実現する  
IAMと統合して使ったりできる

### Amazon GuardDuty
マネージ型脅威検出サービス  
不正アクセスなどが機械学習を用いてレポートしたりアドバイスしたり

### AWS Artifact
コンプライアンス上の課題があるかないかをレポートしてくれる

### Amazon Inspector
セキュリティ分析ツール  
一般的なセキュリティ脅威の分析

### AWS CloudHSM
法令遵守するためのレポート機能

### AWS Key Management Service
暗号化
データベースなどのデータを暗号化する

# アプリケーション統合
アプリケーション同士の連携機能  
システム構成を疎結合化できる

## 優先度高
### Amazon Simple Queue Service (SQS)
マネージ型メッセージキュー  
処理の順番を決めて処理させる
### Amazon Simple Notification Service(SNS)
プッシュして機能を動かすアプリケーションの連携で使う  
SQSとの使い分けをきっちり理解しておく
## 優先度低
なし

# 開発者用ツール
## 優先度高
なし

## 優先度低
### AWS CodeDeploy
AWSで開発したらデプロイを自動化できる  
CodePipeline, CodeCommit, CodeBuildと併せて使用する  
ビルドされたものをデプロイする

### AWS CodeCommit
アプリケーションの開発データを保存する

### AWS CodePipeline
CodePipeline, CodeCommit, CodeBuild これらの順番を決めて自動化するもの

### AWS コマンドラインインターフェイス
CLI　AWSを操作する、マネジメントコンソール以外の操作を行う際に使える  
CLIが慣れた人はこっちのほうがいい場合もある

### AWS CodeBuild
保存したコードのビルドとテストを行う
