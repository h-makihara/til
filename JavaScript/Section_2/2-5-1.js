const n = 1;
const si = true;

let café = 1;             // Unicode文字を使って変数を定義する。
console.log(caf\u00e9)    // => 1; エスケープシーケンスを使って変数をアクセス。
console.log(caf\u{E9})    // => 1; 別の方法で記述する。

console.log("\u{1F600}"); // 笑顔の絵文字を表示する。
