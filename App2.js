function addx(a, b) {
  return a + b;
}
console.log(addx(5, 3));

function subby(x, y) {
  return x - y;
}
console.log(subby(10, 4));

function multipli(q, w) {
  return q * w;
}
console.log(multipli(6, 7));

function dividi(n, m) {
  return n / m;
}
console.log(dividi(20, 4));

function lefty(a, b) {
  return a % b;
}
console.log(lefty(10, 3));

function goodNum(z) {
  if (z > 0) {
    return "Positive";
  } else {
    return "Not Positive";
  }
}
console.log(goodNum(12));

function badNum(k) {
  if (k < 0) {
    return "Negative";
  } else {
    return "Not Negative";
  }
}
console.log(badNum(-9));

function evenCheck(r) {
  if (r % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenCheck(15));

function sameSame(a1, b1) {
  if (a1 == b1) {
    return "Equal";
  } else {
    return "Not Equal";
  }
}
console.log(sameSame(7, 7));

function biggerOne(p, q) {
  if (p > q) {
    return "Greater";
  } else {
    return "Smaller";
  }
}
console.log(biggerOne(9, 15));

function mixName(xx, yy) {
  return xx + " " + yy;
}
console.log(mixName("Ali", "Raza"));

function marksGame(mrks) {
  if (mrks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(marksGame(33));

function ageTeen(xxAge) {
  if (xxAge >= 13 && xxAge <= 19) {
    return "Teenager";
  } else {
    return "Not a Teenager";
  }
}
console.log(ageTeen(17));

function sayHello(whooo) {
  return "Hello, " + whooo + "!";
}
console.log(sayHello("Ahmed"));

function voteCheck(ag) {
  if (ag >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}
console.log(voteCheck(21));

function absFake(num) {
  if (num >= 0) {
    return num;
  } else {
    return -num;
  }
}
console.log(absFake(-88));

function heatCold(ttt) {
  if (ttt > 30) {
    return "Hot";
  } else if (ttt < 10) {
    return "Cold";
  } else {
    return "Normal";
  }
}
console.log(heatCold(25));

function triShape(a, b, c) {
  if (a == b && b == c) {
    return "Equilateral";
  } else if (a == b || b == c || a == c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}
console.log(triShape(5, 5, 7));

function priceCut(p1, disc) {
  return p1 - (p1 * disc / 100);
}
console.log(priceCut(1000, 20));

function checkPwd(pwd) {
  if (pwd.length >= 8) {
    return "Valid Password";
  } else {
    return "Too Short";
  }
}
console.log(checkPwd("abc12345"));