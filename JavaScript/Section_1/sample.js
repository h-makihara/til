let book = {
  topic: "JavaScript",
  edition: 7,
};

console.log(book.topic);
console.log(book["edition"]);
book.author = "Flanagan";
book.contents = {};

console.log(book.contents?.ch01?.sect1);

let primes = [2, 3, 5, 7];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length - 1]);
primes[4] = 9;
console.log(primes[4]);
primes[4] = 11;
console.log(primes[4]);
let empty = [];
console.log(empty.length);

let points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];

let data = {
  trial1: [
    [1, 2],
    [3, 4],
  ],
  trial2: [
    [2, 3],
    [4, 5],
  ],
};

let a = [];
a.push(1, 2, 3);
a.reverse();

points.dist = function () {
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a * a + b * b);
};
console.log(points.dist());

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}

console.log(abs(-10) === abs(10));

function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}
console.log(sum(primes));

function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}

console.log(factorial(4));

function factorial2(n) {
  let i,
    product = 1;
  for (i = 2; i <= n; i++) product *= i;
  return product;
}

console.log(factorial2(5));

class Ponit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let p = new Ponit(1, 1);
console.log(p.distance());
