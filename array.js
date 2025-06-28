let std = ["Ali", "Zara", "Bilal"];
std.push("Sara");
console.log(std);

let frt = ["apple", "banana", "mango"];
frt.pop();
console.log(frt);

let dy = ["Tuesday", "Wednesday"];
dy.unshift("Monday");
console.log(dy);

let clr = ["Red", "Blue", "Green"];
clr.shift();
console.log(clr);

let sub = ["Eng", "Urdu", "Bio"];
sub.splice(2, 0, "Math", "Science");
console.log(sub);

let cty = ["Lahore", "Karachi", "Islamabad", "Multan"];
cty.splice(1, 2);
console.log(cty);

let cntry = ["Pak", "India", "China", "USA", "UK"];
let part = cntry.slice(0, 3);
console.log(part);

let str = "apple,banana,mango";
let arr = str.split(",");
console.log(arr);

let ch = ['J','S'];
let joinn = ch.join("");
console.log(joinn);

let a1 = ['pen','pencil'];
let a2 = ['eraser','sharpener'];
let a3 = a1.concat(a2);
console.log(a3);

let num = [10, 5, 2, 8];
num.sort();
console.log(num);

let nam = ["Usman", "Ali", "Zain", "Bilal"];
nam.sort();
console.log(nam);

let rev = [1, 2, 3, 4, 5];
rev.reverse();
console.log(rev);

let c = ["Red", "Blue", "Green"];
let ind = c.indexOf("Blue");
console.log(ind);

let emp = [];
emp.push("One", "Two", "Three");
console.log(emp);

let five = [11, 22, 33, 44, 55];
five.splice(2, 1);
console.log(five);

let txt = "HTML CSS JavaScript";
let sp = txt.split(" ");
console.log(sp);

let abc = ['a', 'b', 'c'];
let done = abc.reverse().join("-");
console.log(done);

let k = ["Lahore", "Karachi", "Multan"];
let pos = k.indexOf("Karachi");
console.log(pos);

let ev = [2, 4, 6];
let od = [1, 3, 5];
let mix = ev.concat(od).reverse();
console.log(mix);