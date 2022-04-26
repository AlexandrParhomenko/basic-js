const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let ans = 0;
  let s11 = s1.split('');
  let s22 = s2.split('');

  for (let a = 0; a < s11.length; a++) {
      if (s22.indexOf(s11[a]) >= 0) {
        s22.splice(s22.indexOf(s11[a]), 1)
        ans+=1;
      }
    }
    //s11.forEach(el => el === s11[a] ? ans+=1)
  return ans;
}

module.exports = {
  getCommonCharacterCount
};
