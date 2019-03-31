/**
 * @module minesweeper.js/CellFlagEnum
 */

/**
 * @readonly
 * @enum {Number} Enumeration used to know if a cell has a flag.
 */
const CellFlagEnum = {
  /** There is none flag. */
  NONE: 0,
  /** There is a flag. */
  EXCLAMATION: 1,
  /** There is a question. */
  QUESTION: 2,
};

module.exports = CellFlagEnum;
