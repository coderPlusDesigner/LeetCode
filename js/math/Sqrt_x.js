// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example:
//   Input: x = 8
//   Output: 2
//   Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

const x = 228;

var mySqrt = function (x) {
  if (x == 0) {
    return 0;
  }
  let guessingNumber = x / 2;
  while (
    Math.trunc(guessingNumber) !==
    Math.trunc((1 / 2) * (guessingNumber + x / guessingNumber))
  ) {
    guessingNumber = (1 / 2) * (guessingNumber + x / guessingNumber);
  }
  return Math.trunc(guessingNumber);
};

console.log(mySqrt(x));
