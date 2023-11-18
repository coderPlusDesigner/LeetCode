// 29. Divide Two Integers

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Example:
//   Input: dividend = 10, divisor = 3
//   Output: 3
//   Explanation: 10 / 3 = 3.33333..which is truncated to 3.

// Constraints:
//   -2**31 <= dividend, divisor <= 2**31 - 1
//   divisor != 0

// https://leetcode.com/problems/divide-two-integers/description/

const dividend = 10003,
  divisor = 4;

var divide = function (dividend, divisor) {
  // Converting the input values to match the calculation needs:
  let absDivisor = Math.abs(divisor);
  let dividendParts = Math.abs(dividend).toString().split("");
  // Checking the values, so if the division actually gives the zero(0) value
  if (Math.abs(dividend) < absDivisor || dividend === 0) {
    return 0;
  }
  // Preparing a new inside function to get the sign of the upcoming result;
  let resultSign = () => {
    if (Math.sign(dividend) === Math.sign(divisor)) {
      return "positive";
    } else {
      return "negative";
    }
  };
  let reminder = 0;
  let resultParts = [];
  for (let i = 0; i < dividendParts.length; i++) {
    let part = parseInt(reminder.toString() + dividendParts[i]);
    if (part >= absDivisor) {
      let reservedValue = absDivisor;
      let reservedCheckValue = absDivisor;
      let resultPart = 0;
      while (part >= reservedCheckValue) {
        reservedCheckValue += reservedValue;
        resultPart++;
      }
      reminder = part - (reservedCheckValue - reservedValue);
      resultParts.push(resultPart.toString());
    } else {
      reminder = part;
      resultParts.push("0");
    }
  }
  let finalResult = 0;
  if (resultSign() == "negative") {
    finalResult = parseInt(`-${resultParts.join("")}`);
  } else {
    finalResult = parseInt(resultParts.join(""));
  }
  if (finalResult < -(2 ** 31)) {
    finalResult = -(2 ** 31);
  } else if (finalResult > 2 ** 31 - 1) {
    finalResult = 2 ** 31 - 1;
  }
  return finalResult;
};

console.log(divide(dividend, divisor));
