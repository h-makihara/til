# proxy 配下で利用する際の注意点
普通にマシンの環境変数を使ってくれない
```
npm -g config set server proxy http://yourproxy.jp:8080
npm -g config set server https-proxy http://yourproxy.jp:8080
```

また、独自 npm registry がある場合は、下記で設定する
```
npm -g config set registry http://yourregistry:port
```

設定内容を確認する場合はこのコマンドを実行する
```
npm config list
```
