# docker-compose で、env_fileを指定して書いてもBuild時に反映されない
- https://docs.docker.com/compose/compose-file/#args  
```
ビルドプロセス中にのみアクセス可能な環境変数であるビルド引数を追加します。
```
ARGで指定した環境変数は、Build後のコンテナには反映されない

# じゃあENVは？
使い分けとして、Build時にのみ使いたい環境変数はARGを使い、
Build後に使いたい環境変数としてはENVで定義する




