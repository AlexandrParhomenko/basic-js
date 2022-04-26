const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str1 = str.split('');
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str1[i+1]) {

    }
  }
  return res;
}

module.exports = {
  encodeLine
};
