let x = 10;
x++;
console.log(x); // increment => 11
x--;
console.log(x); // decrement => 10

let age = 20;
let c = 15;
console.log(age >= 18 && c > 10); // true
console.log(age >= 18 || c < 10); // true
console.log(!(c < 10)); // true

let a = 10;
console.log(typeof a); // number

let n;
console.log(n); // undefined
console.log(typeof n); // undefined

let y = null;
console.log(y); // null
console.log(typeof y); // object

const f = { name: "ravi" };
console.log(f);

const h = ["apple"];
console.log(typeof h); // object
console.log(Array.isArray(h)); // true

