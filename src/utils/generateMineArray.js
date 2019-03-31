/**
 * @module minesweeper.js/generateMineArray
 */

const {singleToMultidimensionalArray} = require('./helpers');

/**
 * @typedef {Object} MineArrayOptions
 * @property {Number} [rows=10] Rows count.
 * @property {Number} [cols=10] Columns count.
 * @property {Number} [mines] Mines count.
 */

/**
 * Generate Mine Array from options.
 * @param {MineArrayOptions} options Options used to generate the mine array.
 * @public
 * @return {Array<Array<Number>>} Mine array
 */
function generateMineArray({rows = 10, cols = 10, mines = parseInt((rows * cols) * 0.15, 10)}) {
  const length = rows * cols;
  const mineArray = [];

  for (let i = 0; i < length; ++i) {
    if (i < mines) {
      mineArray.push(1);
    } else {
      mineArray.push(0);
    }
  }

  // I use the sort function to sort the array randomly.
  mineArray.sort(() => 0.5 - Math.random());

  return singleToMultidimensionalArray(mineArray, cols);
}

module.exports = generateMineArray;
