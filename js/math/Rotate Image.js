// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.

// Example:
//     Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
//     Output: [[7,4,1],[8,5,2],[9,6,3]]

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

var rotate = function (matrix) {
  // getting main parameters
  const collapseMatrix = [...matrix];
  const len = matrix.length;
  let midElement = null;
  if (len % 2 != 0) {
    midElement = matrix[Math.floor(len / 2)][Math.floor(len / 2)];
  }
  // matrix layers to lines list
  const collapseLines = [];
  for (let i = 0; i < Math.ceil(len / 2); i++) {
    collapseLines[i] = [];
    // adding top part
    for (let j = 0; j < collapseMatrix.length - 1; j++) {
      collapseLines[i].push(collapseMatrix[0][j]);
    }
    // now right side
    for (let j = 0; j < collapseMatrix.length - 1; j++) {
      collapseLines[i].push(collapseMatrix[j][collapseMatrix.length - 1]);
    }
    // bottom part
    for (let j = collapseMatrix.length - 1; j > 0; j--) {
      collapseLines[i].push(collapseMatrix[collapseMatrix.length - 1][j]);
    }
    // then left side
    for (let j = collapseMatrix.length - 1; j > 0; j--) {
      collapseLines[i].push(collapseMatrix[j][0]);
    }
    // deleting added parts
    collapseMatrix.shift();
    collapseMatrix.pop();
    for (let j = 0; j < collapseMatrix.length; j++) {
      collapseMatrix[j].shift();
      collapseMatrix[j].pop();
    }
  }
  delete collapseMatrix;
  // console.log(collapseLines);

  // 90 degrees rotation
  for (let i = 0; i < collapseLines.length; i++) {
    let rotationLength = collapseLines[i].length / 4;
    let valueSaver = null;
    for (let j = 0; j < rotationLength; j++) {
      valueSaver = collapseLines[i][collapseLines[i].length - 1];
      collapseLines[i].pop();
      collapseLines[i].unshift(valueSaver);
    }
  }
  // console.log(collapseLines);

  // placing the new values
  for (let i = 0; i < collapseLines.length; i++) {
    // filling the top part
    for (let j = i, t = 0; j < len - 1 - i; j++, t++) {
      matrix[i][j] = collapseLines[i][t];
    }
    // now right side
    for (let j = i, t = 0; j < len - 1 - i; j++, t++) {
      matrix[j][len - 1 - i] = collapseLines[i][t + (len - 1 - i * 2)];
    }
    // bottom part
    for (let j = len - 1 - i, t = 0; j > i; j--, t++) {
      matrix[len - 1 - i][j] = collapseLines[i][t + ((len - 1) * 2 - i * 4)];
    }
    // left side
    for (let j = len - 1 - i, t = 0; j > i; j--, t++) {
      matrix[j][i] = collapseLines[i][t + ((len - 1) * 3 - i * 6)];
    }
  }
  if (midElement) {
    matrix[Math.floor(len / 2)][Math.floor(len / 2)] = midElement;
  }
};

rotate(matrix);
console.log(matrix);
