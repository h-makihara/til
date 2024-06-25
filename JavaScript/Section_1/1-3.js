// スラッシュ文字が2つ並んだあとの文字はすべてコメントアウトになる。
// コメントで JavaScript コードを説明しているのでよく読むように。

// 変数は値につけられる記号的な名前
// 変数を宣言するときには、 let キーワードを使う
let x; // x という名前の変数を宣言する

// 値を変数に代入するときには「=」記号を使う。
x = 0;             // これで変数 x の値は0になる。
x                  // => 0; 変数が評価され、代入された値になる。

// JavaScript は、さまざまな型をサポートしている。
x = 1;             // 数値。
x = 0.01;          // 整数も実数も同じ数値型になる。
x = "hello world"; // 文字列は引用符で囲む。
x = 'JavaScript';  // 文字列は単一引用符でも囲める。
x = true;          // 論理値。
x = false;         // もう 1 つの論理値。
x = null;          // null は特殊な値で、「値がない」ことを意味する。
x = undefined;     // ndefined は、 null と同じで特殊な値。

let book = {
  topic: "JavaScript",
  edition: 7
};

console.log(book.topic);
console.log(book["edition"]);
book.author = "Flanagan";
book.contents = {};

console.log(book.contents?.ch01?.sect1)

let primes = [2,3,5,7];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length-1]);
primes[4] = 9;
primes[4] = 11;
let empty = [];
console.log(empty.length);
let points = [
  {x: 0, y: 0},
  {x: 1, y: 1}
];

let data = {
  trial1: [[1,2], [3,4]],
  trial2: [[2,3], [4,5]]
};

