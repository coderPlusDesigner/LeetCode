// 66. Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example:
//   Input: digits = [1,2,3]
//   Output: [1,2,4]

const digits = [
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9,
];

// With for loop:

// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] != 9) {
//       digits[i] += 1;
//       break;
//     } else {
//       digits[i] = 0;
//       if (i == 0) {
//         digits.unshift(1);
//       }
//     }
//   }
//   return digits;
// };

// With while loop:
var plusOne = function (digits) {
  i = digits.length - 1;
  while (digits[i] == 9) {
    digits[i] = 0;
    if (i == 0) {
      digits.unshift(1);
    }
    i--;
  }
  if (i >= 0) {
    digits[i] += 1;
  }
  return digits;
};

console.log(plusOne(digits));
