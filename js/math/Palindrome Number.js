// 9. Palindrome Number

// Given an integer x, return true if x is a palindrome(An integer is a palindrome when it reads the same forward and backward), and false otherwise.

// Example :
//   Input: x = 121
//   Output: true
//   Explanation: 121 reads as 121 from left to right and from right to left.

const x = 10;

var isPalindrome = function (x) {
  // a new list from the given number (digits):
  const digits = x.toString().split("");
  // removing the middle digit
  if (digits.length % 2 !== 0) {
    digits.splice(Math.floor(digits.length / 2), 1);
  }
  // comparing
  let isPalindrome = true;
  for (
    let i = 0, j = digits.length - 1;
    i < digits.length / 2, j >= digits.length / 2;
    i++, j--
  ) {
    if (digits[i] === digits[j]) {
      isPalindrome = isPalindrome && true;
    } else {
      isPalindrome = isPalindrome && false;
    }
  }
  return isPalindrome;
};

console.log(isPalindrome(x));
