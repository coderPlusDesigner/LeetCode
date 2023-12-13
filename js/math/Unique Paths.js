// 62. Unique Paths

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 10 ^ 9.

// Example:
//     Input: m = 3, n = 2
//     Output: 3
//     Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
//     1. Right -> Down -> Down
//     2. Down -> Down -> Right
//     3. Down -> Right -> Down

const m = 3,
  n = 2;

var uniquePaths = function (m, n) {
  const getFactorial = (f) => {
    if (f == 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= f; i++) {
      result *= i;
    }
    return result;
  };
  return getFactorial(m + n - 2) / (getFactorial(m - 1) * getFactorial(n - 1));
};

console.log(uniquePaths(m, n));
