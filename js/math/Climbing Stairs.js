// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?

// Example:
//   Input: n = 2
//   Output: 2
//   Explanation: There are two ways to climb to the top.
//   1. 1 step + 1 step
//   2. 2 steps

const n = 5;

var climbStairs = function (n) {
  function factorial(value) {
    if (value == 0 || value == 1) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= value; i++) {
      result *= i;
    }
    return result;
  }
  let result = 0;
  let Ones = n;
  let Twos = 0;
  while (Ones >= 0) {
    result += factorial(Ones + Twos) / (factorial(Ones) * factorial(Twos));
    Ones -= 2;
    Twos++;
  }
  return result;
};

console.log(climbStairs(n));
