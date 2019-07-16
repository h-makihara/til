# Safari の強制再読込
Shift + Reload で強制再読込される
ちなみに Opera や Firefox も同じ

# CORSの無効化
開発メニューは表示されている前提で進めます

Vue.js開発してたりすると下記エラーに遭遇する
```
Origin http://localhost:8080 is not allowed by Access-Control-Allow-Origin.
```

これはCORS(Cross-Origin Resource Sharing)を制限されているために発生している  
なので、無効化してあげれば想定通りの挙動を取り戻せる  
と、[ここ](https://qiita.com/kai_kou/items/54b61a274b77977add54)に書いてた。

