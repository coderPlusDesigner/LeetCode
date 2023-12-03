// 60. Permutation Sequence

// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Example:
//   Input: n = 3, k = 3
//   Output: "213"

// Constraints:
//   1 <= n <= 9
//   1 <= k <= n!

const n = 3,
  k = 1;

// Dummy solution:
// var getPermutation = function (n, k) {
//   const permutations = [];
//   for (let i = 1; i <= n; i++) {
//     permutations.push(i);
//   }
//   const results = [];
//   let kNow = 0;
//   let minVal = parseInt(permutations.join(""));
//   while (kNow < k) {
//     let found = true;
//     for (let i = 0; i < permutations.length; i++) {
//       if (!minVal.toString().includes(permutations[i].toString())) {
//         found = false;
//       }
//     }
//     if (found) {
//       kNow++;
//       results.push(minVal.toString());
//     }
//     minVal++;
//   }
//   return results[results.length - 1];
// };

var getPermutation = function (n, k) {
  const permutations = [];
  const factorials = [];
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    permutations.push(i);
    temp *= i;
    if (i !== n) {
      factorials.unshift(temp);
    }
  }
  let result = new Array(n).fill(0);
  let kNew = k;
  for (let i = 0; i < n; i++) {
    if (permutations.length !== 1) {
      let j = 0;
      while (kNew <= factorials[i] * (n - j)) {
        result[i] = permutations[n - 1 - j];
        j++;
      }
      for (let x = 0; x < n; x++) {
        if (permutations[x] == result[i]) {
          permutations.splice(x, 1);
        }
      }
      kNew -= (n - j) * factorials[i];
    } else {
      result[i] = permutations[0];
    }
  }
  return result.join("");
};

console.log(getPermutation(n, k));
