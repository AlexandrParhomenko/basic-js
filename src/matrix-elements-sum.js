const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((acc, el) => acc + el);
    for (let i = 1; i < matrix.length; i++) {
      let count = 0;
      matrix[i].forEach(el => {
        if (matrix[i - 1][count]) sum += el;
        count++;
      })
    }
    return sum;
}

module.exports = {
  getMatrixElementsSum
};
