# VueでgRPC対応
.protoを吐き出せるようにする  
コマンドとしては以下を想定する  
```
protoc -I=. ${protoname}.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:.
```
これを実行する場合、素のprotocだけでは  
```
protoc-gen-grpc-web: program not found or is not executable
--grpc-web_out: protoc-gen-grpc-web: Plugin failed with status code 1.
```
というエラーメッセージが出る  
これを回避するため、 js や ts 出力に対応する plugin を install する  

1. [plugin](https://github.com/grpc/grpc-web/releases)からファイルをダウンロード
1. ダウンロードしたファイルを解凍し、できたディレクトリに移動
1. 下記コマンドを実行し、 plugin を install する
```
make install-plugin
```
場合によっては sudo 必要かも
1. install 先のパスが $PATH に通っていることを確認する。  
通っていなければ通す
1. 完了！

これで、最初に書いたコマンドを実行するとカレントディレクトリにファイルが出力される

