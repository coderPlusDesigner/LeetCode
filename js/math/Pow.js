// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n(i.e., xn).

// https://leetcode.com/problems/powx-n/description/

let x = 0.00001,
  n = 2147483647;

var myPow = function (x, n) {
  if (x > -100 && x < 100 && n >= -(2 ** 31) && n <= 2 ** 31 - 1) {
    if (n === 0) {
      return 1;
    }
    if (n < 0) {
      n = Math.abs(n);
      x = 1 / x;
    }
    if (n % 2 === 0) {
      const halfReduce = myPow(x, n / 2);
      return halfReduce * halfReduce;
    } else {
      return x * myPow(x, n - 1);
    }
  } else {
    return "Wrong values entered!";
  }
};

console.log(myPow(x, n));
