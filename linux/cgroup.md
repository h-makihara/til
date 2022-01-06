# cgroup
- cpu時間
- システムメモリ
- ネットワーク帯域幅

などのリソースやその組み合わせをユーザ定義のプロセスに割り当てることができる。  
また、設定したcgroupのモニタリングや特定リソースへのcgroupのアクセスを拒否することもできる。  
cgroupを再構築して、再起動後も永続利用されるようにすることも可能。  

## cgcreate
cgroupを作成する
```
cgcreate -t uid:gid -a uid:gid -g subsystems:path
```

### -t オプション
このオプションで指定したユーザID, グループIDは cgroup にタスクを追加できるようにする

### -a オプション
このオプションで指定したユーザID, グループIDは cgroup 内のタスクが持つシステムリソースへのアクセスを変更できる

### -g オプション
cgroup の階層に関連付けられるコンマ区切りの subsystem 一覧として指定する。  
コロンの後ろに指定したPATH名が、その手前のコンマ区切りの cgroup の階層に関連付けられたsubsystemのディレクトリ配下に作成される

```
$ UUID=$(uuidgen)
$ sudo cgcreate -t $(id -un):$(id -gn) -a $(id -un):$(id -gn) -g cpu,memory:$UUID
```
1. uuidgen で、 libuuid ライブラリを使用し、他と被らない識別子を生成し、 UUID 環境変数へ代入する
2. cgcreate コマンドでタスク追加・リソースアクセスを許可し、UUID環境変数を利用してcpu, memoryの2つグループを作成する

## cgset
