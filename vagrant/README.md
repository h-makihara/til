# Dockerfile に近い感じ
Vagrantfile を作成する
Vagrant up すると、boxFileを取得してきて起動する
※ もちろんVirtualboxはある前提

Vagrantfileを手で書くのが面倒な人は
```
vagrant init centos70
```
のように init すると Vagrantfile がカレントディレクトリに出力される

# 起動
```
vagrant up
```
で、起動できる  
初回はいろいろ処理があるので時間がかかる。

# 状態の確認
```
vagrant status
```
で、現在のステータスが確認できる。  
起動してるとこんな感じ
```
Current machine states:

default                   running (virtualbox)

The VM is running. To stop this VM, you can run `vagrant halt` to
shut it down forcefully, or you can run `vagrant suspend` to simply
suspend the virtual machine. In either case, to restart it again,
simply run `vagrant up`.
```

# 停止
上記ステータス確認でも書いてるけど
```
vagrant halt
```
で停止できる。どうやら suspend もあるみたい…

# 接続
```
vagrant ssh
```
で、接続できる。  
思っていたより簡単にできて幸せ。
