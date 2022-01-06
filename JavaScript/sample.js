var x;
x = true;
console.log(x) // 0が出力される


var book = {
    topic: "JavaScript",
    fat: true
};

console.log(book.topic);
console.log(book["fat"]);
book.author = "Flanagan";
book.contents = {};


var primes = [2, 3, 5, 7];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length-1]);
primes[4] = 9;
console.log(primes[4]);
primes[4] = 11;
console.log(primes[4]);
var empty = [];
console.log(empty.length);
