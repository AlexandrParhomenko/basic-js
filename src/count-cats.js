const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let i = 0;
  for (let t = 0; t < matrix.length; t++) {
    for (let r = 0; r < matrix[t].length; r++)
    if (matrix[t][r] === '^^') {
      i++;
    }
  }
  return i;
}

module.exports = {
  countCats
};
