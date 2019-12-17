# host を localhost ではなく別のアドレスで待ち受けたい場合
$hostname には、IPアドレスを指定することも可能  
もちろん、 0.0.0.0 もできる
```
ng serve --host $hostname
```

# 待ち受けポートを変更したい場合
```
ng serve --port $port
```
