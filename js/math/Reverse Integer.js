// 7. Reverse Integer

// Given a signed 32 - bit integer x, return x with its digits reversed.If reversing x causes the value to go outside the signed 32 - bit integer range[-231, 231 - 1], then return 0.

// Example:
//   Input: x = -123
//   Output: -321

// Constraints:
// -231 <= x <= 231 - 1

// https://leetcode.com/problems/reverse-integer/description/

const x = 2 ** 33;

var reverse = function (x) {
  let sign = Math.sign(x);
  let value =
    parseInt(Math.abs(x).toString().split("").reverse().join("")) * sign;
  if (
    Number.isSafeInteger(value) &&
    value >= -(2 ** 31) &&
    value <= 2 ** 31 - 1
  ) {
    return value;
  } else {
    // return "The environment does not allow you to store 64-bit integers!";
    return 0;
  }
};

console.log(reverse(x));
