// 43. Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built -in BigInteger library or convert the inputs to integer directly.

// Example:
//     Input: num1 = "123", num2 = "456"
//     Output: "56088"

const num1 = "167141802233061013023557397451289113296441069",
  num2 = "401716832807512840963";

var multiply = function (num1, num2) {
  // Multiplication table for inner calculations:

  const m_table = {};
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      m_table[`${i} * ${j}`] = `${i * j}`;
    }
  }
  function multiplicationTable(x, y) {
    if (x == "0" || y == "0") {
      return "0";
    }
    let multiplication = `${x} * ${y}`;
    return m_table[multiplication];
  }
  // return m_table;

  // ---------------------------------

  // Multiplications between each digits of the two numbers:

  let digitMultiplications = [];
  for (let i = 0; i < num1.length; i++) {
    digitMultiplications[i] = [];
    for (let j = 0; j < num2.length; j++) {
      digitMultiplications[i].push(multiplicationTable(num1[i], num2[j]));
    }
  }
  // return digitMultiplications;

  // ---------------------------------

  // Multiplied parts to be added:

  const valuesToAdd = [];
  for (let i = 0; i < digitMultiplications.length; i++) {
    let valueParts = [];
    let incrementalNumber = "";
    for (let j = digitMultiplications[i].length - 1; j >= 0; j--) {
      if (!incrementalNumber) {
        if (digitMultiplications[i][j].length == 1) {
          valueParts.unshift(digitMultiplications[i][j]);
        } else {
          valueParts.unshift(digitMultiplications[i][j][1]);
          incrementalNumber = digitMultiplications[i][j][0];
        }
      } else {
        let temp = (
          parseInt(digitMultiplications[i][j]) + parseInt(incrementalNumber)
        )
          .toString()
          .split("");
        if (temp.length == 1) {
          valueParts.unshift(temp[0]);
          incrementalNumber = "";
        } else {
          valueParts.unshift(temp[temp.length - 1]);
          temp.pop();
          incrementalNumber = temp.join("");
        }
      }
    }
    valueParts.unshift(incrementalNumber);
    valuesToAdd.push(
      (valueParts.join("") + "0".repeat(digitMultiplications.length - (i + 1)))
        .split("")
        .reverse()
        .join("")
    );
  }
  // return valuesToAdd;

  // ---------------------------------

  // Calculating the sum of multiplied overall values:

  // finding the largest overall value:
  let maxLength = valuesToAdd[0].length;
  for (let i = 0; i < valuesToAdd.length; i++) {
    if (valuesToAdd[i].length > maxLength) {
      maxLength = valuesToAdd[i].length;
    }
  }

  let preResult = [];
  let incrementalNumber2 = 0;
  for (let i = 0; i < maxLength; i++) {
    let digitsToBeAdded = [];
    for (let j = 0; j < valuesToAdd.length; j++) {
      if (valuesToAdd[j][i]) {
        digitsToBeAdded.push(valuesToAdd[j][i]);
      }
    }

    let eachAddition = 0;
    for (let j = 0; j < digitsToBeAdded.length; j++) {
      eachAddition += parseInt(digitsToBeAdded[j]);
    }

    if (incrementalNumber2 == 0) {
      if (eachAddition < 10) {
        preResult.push(eachAddition.toString());
      } else {
        eachAddition = eachAddition.toString().split("");
        preResult.push(eachAddition[eachAddition.length - 1]);
        eachAddition.pop();
        incrementalNumber2 = parseInt(eachAddition.join(""));
      }
    } else {
      let temp = (eachAddition + incrementalNumber2).toString().split("");
      preResult.push(temp[temp.length - 1]);
      temp.pop();
      if (temp.length) {
        incrementalNumber2 = parseInt(temp.join(""));
      } else {
        incrementalNumber2 = 0;
      }
    }
  }
  if (incrementalNumber2 != 0) {
    preResult.push(incrementalNumber2.toString());
  }

  let result = preResult.reverse().join("");
  if (result == "0".repeat(result.length)) {
    return "0";
  } else {
    return result;
  }
};

console.log(multiply(num1, num2));
