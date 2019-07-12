# npm run dev した時外部からもアクセスしたい
通常、何も設定せずに実行すると  
http://localhost:8080  
で実行され、ローカルホストからしかアクセスを受け付けなくなる。  
これはとても不便。  
特に、リモートで作業していて、実行結果を見たいときとか。  
で、それを見えるようにするために設定する項目が以下
## 外部からも npm run dev で参照したい(0.0.0.0 で待ち受けたい)
1. プロジェクトディレクトリの以下パスのファイルを修正
```
# $project_dir/config/index.js
```
このファイルの module.exports で宣言されてる中に dev: で host: の指定が localhost になっている部分がある  
これを 0.0.0.0 に変更する  
大体こんな感じ
```
module.exports = {
  dev: {
    assetsSubDirectory: 'static'
    assetsPublicPath: '/',
    proxyTable: {},
    host: '0.0.0.0',
    port: 8080,

...
```

1. 次に、プロジェクトディレクトリの以下パスのファイルを修正
```
# $project_dir/build/webpack.dev.conf.js
```
このファイルの devServer: で宣言されている中に以下を追加する
```
disableHostCheck: true,
```
これで外部からもアクセスできるようになる。(はず
