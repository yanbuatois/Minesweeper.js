/**
 * @module minesweeper.js/Cell
 */
/**
 * @private
 * @typedef {Object} CellParams Params passed to the Cell's constructor
 * @property {Number} [x=0] X position
 * @property {Number} [y=0] Y position
 * @property {Number} [isMine=false] True if the cell is a mine.
 * @property {Number} [numAdjacentMines=0] Number of adjacent mines.
 */

const CellFlagEnum = require('../enums/CellFlagEnum');
const CellStateEnum = require('../enums/CellStateEnum');

/**
 * Represents a cell.
 */
class Cell {
  /**
   * @private
   * @param {CellParams} param0 Settings of the cell.
   */
  constructor({x = 0, y = 0, isMine = false, numAdjacentMines = 0}) {
    /**
     * @type {Number}
     * @private
     */
    this._x = x;
    /**
     * @type {Number}
     * @private
     */
    this._y = y;
    /**
     * @type {Boolean}
     * @private
     */
    this._isMine = isMine;
    /**
     * @type {Number}
     * @private
     */
    this._numAdjacentMines = numAdjacentMines;

    /**
     * @type {Number}
     * @private
     */
    this._state = CellStateEnum.CLOSED;

    /**
     * @type {Number}
     * @private
     */
    this._flag = CellFlagEnum.NONE;
  }

  /**
   * Get x position.
   * @type {Number}
   * @public
   */
  get x() {
    return this._x;
  }

  /**
   * Get y position.
   * @type {Number}
   * @public
   */
  get y() {
    return this._y;
  }

  /**
   * Check if there is a mine.
   * @type {Boolean}
   * @public
   */
  get isMine() {
    return this._isMine;
  }

  /**
   * Number of adjacent mines.
   * @type {Number}
   * @public
   */
  get numAdjacentMines() {
    return this._numAdjacentMines;
  }

  /**
   * State of the cell.
   * @type {Number}
   * @public
   */
  get state() {
    return this._state;
  }

  /**
   * Flag on the cell.
   * @type {Number}
   * @public
   */
  get flag() {
    return this._flag;
  }

  /**
   * Set the state of the case.
   * @param {Number} value New value.
   * @type {Number}
   * @private
   */
  set state(value) {
    this._state = value;
  }

  /**
   * Set the flag on the case.
   * @param {Number} value New value.
   * @type {Number}
   * @private
   */
  set flag(value) {
    this._value = value;
  }
}

module.exports = Cell;
