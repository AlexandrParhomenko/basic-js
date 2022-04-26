const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let n1 = n.toString().split('');

  let res = n1.map((el, a, n2) => {

    n2 = n1.slice(0);
    n2.splice(a, 1);
    return Number(n2.join(''));

  });
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
