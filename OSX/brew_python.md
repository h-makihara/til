# brew install python3 するとエラーが出る
```
Linking /usr/local/Cellar/python/3.6.4_4... Error: Permission denied @ dir_s_mkdir - /usr/local/Frameworks
```

最初は権限かと思ったけど、[この記事](https://qiita.com/Jung0/items/d4012814e6fb1b694208)見ると、確かにディレクトリごと無い
なので、作ってあげる
```
$ sudo mkdir /usr/local/Frameworks
$ sudo chown $(whoami):admin /usr/local/Frameworks
```

なお、 fish shell では $(whoami)とは書かないため
```
$ sudo chown (whoami):admin /usr/local/Frameworks
```
と、 $ を削除してコマンドを実行する
