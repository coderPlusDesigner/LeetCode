// 12. Integer to Roman

// Given an integer, convert it to a roman numeral.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Constraints:
// 1 <= num <= 3999

const num = 2811;

var intToRoman = function (num) {
  // Constraints:
  if (num > 3999) {
    return "Max value can be converted to Roman here is 3999";
  }
  if (num <= 0) {
    return "There is no Roman cenvertions for 0 and negative numbers (cause they don't actually exist)";
  }
  const romanNumbers = [
    { 1: "I", 5: "V" },
    { 1: "X", 5: "L" },
    { 1: "C", 5: "D" },
    { 1: "M" },
  ];
  // We split each digits of the integer here:
  numParts = num.toString().split("");
  const result = [];
  // Now we convert each (tens) part of a number and add to the result list:
  for (
    let i = numParts.length - 1, j = 0;
    i >= 0, j < numParts.length;
    i--, j++
  ) {
    // Here with each condition we make different convertions:
    if (parseInt(numParts[i]) <= 3) {
      result.unshift(romanNumbers[j][1].repeat(parseInt(numParts[i])));
    } else if (parseInt(numParts[i]) == 4) {
      result.unshift(romanNumbers[j][1] + romanNumbers[j][5]);
    } else if (parseInt(numParts[i]) == 5) {
      result.unshift(romanNumbers[j][5]);
    } else if (parseInt(numParts[i]) <= 8) {
      result.unshift(
        romanNumbers[j][5] +
          romanNumbers[j][1].repeat(parseInt(numParts[i]) - 5)
      );
    } else if (parseInt(numParts[i]) == 9) {
      result.unshift(romanNumbers[j][1] + romanNumbers[j + 1][1]);
    } else {
      return "Something went wrong!";
    }
  }
  // In the end, we join the result list to an overall value and return:
  return result.join("");
};

console.log(intToRoman(num));
