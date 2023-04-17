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
  // throw new NotImplementedError('Not implemented');
  let count = 0;

  for (let i = 0; i < matrix.length; i++){
    let elem = matrix[i];
    for (let j = 0; j < elem.length; j++){
      if (elem[j] == '^^'){
        count ++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
