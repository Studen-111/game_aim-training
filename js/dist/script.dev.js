"use strict";

// Циклы WHILE и FOR
var num = 0; // Пример 1

console.log("Пример 1");

while (num < 5) {
  console.log(num);
  num++;
} // Пример 2


console.log("Пример 2");

while (num) {
  console.log(num);
  num--;
} // Пример 4


console.log("Пример 4");

do {
  console.log(num);
  num++;
} while (num < 5); // Пример 3


console.log("Пример 3");

while (num) {
  console.log(num--);
} // Пример 5


console.log("Пример 5");

for (num; num < 5; num++) {
  console.log(num);
} // Пример 6


var num1 = 0;
console.log("Пример 6");

for (; num1 < 5; num1++) {
  console.log(num1);
  if (num1 == 2) break;
}

console.log("\u0420\u0430\u0431\u043E\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430, num = ".concat(num1)); // Пример 7

var num2 = 0;
console.log("Пример 7");

for (; num2 < 5; num2++) {
  if (num2 == 2) continue;
  console.log(num2);
} // Пример 8


console.log("Пример 8");

firstFor: for (var _num = 0; _num < 2; _num++) {
  for (var size = 0; size < 3; size++) {
    if (size == 2) {
      break firstFor;
    }

    console.log(size);
  }
} // Пример 9


console.log("Пример 9");

firstFor: for (var _num2 = 0; _num2 < 2; _num2++) {
  for (var _size = 0; _size < 3; _size++) {
    if (_size == 2) {
      continue firstFor;
    }

    console.log(_size);
  }
}