// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example:
//   Input: a = "11", b = "1"
//   Output: "100"

let a = "11",
  b = "1";

var addBinary = function (a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};

console.log(addBinary(a, b));
