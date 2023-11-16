// 13. Roman to Integer

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

let s = "IIIX";

var romanToInt = function (s) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // We split Roman number into parts for a convenient calculations here:
  const partitions = [];
  const value = s.toUpperCase().split("");
  let tempValue = "";
  for (let i = 0; i < value.length; i++) {
    if (tempValue == "") {
      tempValue += value[i];
    } else {
      if (
        romanNumbers[tempValue[tempValue.length - 1]] <= romanNumbers[value[i]]
      ) {
        tempValue += value[i];
      } else {
        partitions.push(tempValue);
        tempValue = value[i];
      }
    }
  }
  partitions.push(tempValue);
  // Calculations:
  let result = 0;
  for (let i = 0; i < partitions.length; i++) {
    if (partitions[i].length == 1) {
      result += romanNumbers[partitions[i]];
    } else if (
      romanNumbers[partitions[i][partitions[i].length - 1]] >
      romanNumbers[partitions[i][partitions[i].length - 2]]
    ) {
      let headValue = partitions[i][partitions[i].length - 1];
      let subtractValue = partitions[i].substr(0, partitions[i].length - 1);
      if (subtractValue.length >= 2 && !subtractValue.includes("II")) {
        return "Wrong Roman number entered";
      }
      let subtractions = 0;
      for (let j = 0; j < subtractValue.length; j++) {
        subtractions += romanNumbers[subtractValue[j]];
      }
      result += romanNumbers[headValue] - subtractions;
    } else {
      for (let j = 0; j < partitions[i].length; j++) {
        result += romanNumbers[partitions[i][j]];
      }
    }
  }
  return result;
};

console.log(romanToInt(s));
