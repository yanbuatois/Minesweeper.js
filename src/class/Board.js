/**
 * @module minesweeper.js/Board
 */

/**
 * @typedef {Object} Coords Represents coords
 * @property {Number} x Coord x
 * @property {Number} y Coord y
 */

const {isMineArrayValid, generateGridFromMineArray, getNbMines} = require('../utils/helpers');
const BoardStateEnum = require('../enums/BoardStateEnum');
const CellStateEnum = require('../enums/CellStateEnum');
const CellFlagEnum = require('../enums/CellFlagEnum');

/**
 * Class which manages the board.
 */
class Board {
  /**
   * @constructor
   * @param {Array<Array<Number>>} mineArray Mines array.
   * @throws {Error} Throw an error if the mine array is invalid;
   * @public
   */
  constructor(mineArray) {
    if (!isMineArrayValid(mineArray)) {
      throw new Error('The mine array supplied to Board constructor was invalid.');
    }

    /**
     * @private
     * @type {Number}
     */
    this._state = BoardStateEnum.PRISTINE;

    /**
     * @private
     * @type {Array<Array<Cell>>}
     */
    this._grid = generateGridFromMineArray(mineArray);
  }

  /**
   * Returns the state of the game.
   * @type {Number}
   * @public
   */
  get state() {
    return this._state;
  }

  /**
   * Returns the rows number
   * @type {Number}
   * @public
   */
  get numRows() {
    return this._grid.length;
  }

  /**
   * Get the columns count.
   * @type {Number}
   * @public
   */
  get numCols() {
    return this._grid[0].length;
  }

  /**
   * Get the mines count.
   * @type {Number}
   * @public
   */
  get numMines() {
    return getNbMines(this.grid);
  }

  /**
   * Get the grid of the game.
   * @type {Array<Array<Cell>>}
   * @public
   */
  get grid() {
    return this._grid;
  }

  /**
   * Get a cell from its coords.
   * @param {Number} x X coordinate of the cell.
   * @param {Number} y Y coord of the cell.
   * @return {Cell} The cell.
   * @throws {Error} Will throw an error if the cell isn't on the board.
   */
  cell(x, y) {
    const tx = +x;
    const ty = +y;
    if (tx < 0 || ty < 0 || ty >= this._numRows || tx >= this._numCols) {
      throw new Error(`No cell is present at the coords ${x};${y}.`);
    } else {
      return this._grid[tx][ty];
    }
  }

  /**
   * Change flag status on the cell.
   * @param {Number} x X coords of the cell
   * @param {Number} y Y coords of the cell
   * @throws {Error} Will throw an error if the cell isn't on the board or if the operation isn't authorized (game finished or open case)
   */
  cycleCellFlag(x, y) {
    const cell = this.cell(x, y);

    if (cell.state === CellStateEnum.OPEN) {
      throw new Error('Case already open.');
    } else if (this._state === BoardStateEnum.WON) {
      throw new Error('You have already won the game.');
    } else if (this._state === BoardStateEnum.LOST) {
      throw new Error('You have already lost the game.');
    }

    // We use a modulo to make a cycle.
    cell.flag = (cell.flag + 1) % 3;

    if (this._state === BoardStateEnum.PRISTINE) {
      this._state = BoardStateEnum.IN_PROGRESS;
    }

    this._updateState();
  }

  /**
   * Open a case.
   * @param {Number} x X coords of the cell
   * @param {Number} y Y coords of the cell
   * @param {Boolean} [floodFill=false] Floodfill mode.
   * @throws {Error} Throws error if the cell doesn't exist.
   */
  openCell(x, y, floodFill = false) {
    const cell = this.cell(x, y);

    if (cell.state = CellStateEnum.OPEN || cell.state !== CellFlagEnum.NONE) {
      return;
    }

    cell.state = CellStateEnum.OPEN;

    if (!cell.isMine) {
      const aCoords = this._getAdjacentCoords(cell);
      aCoords.forEach(({x, y}) => {
        this.openCell(x, y, true);
      });
    }

    if (!floodFill) {
      if (this.state === BoardStateEnum.PRISTINE) {
        this._state = BoardStateEnum.IN_PROGRESS;
      }

      this._updateState();
    }
  }

  /**
   * Update the board situation after a move.
   * @private
   */
  _updateState() {
    let won = true;
    for (const line of this._grid) {
      for (const cell of line) {
        if (cell.state === CellStateEnum.OPEN) {
          if (cell.isMine) {
            this._state = BoardStateEnum.LOST;
            return;
          }
        } else {
          if (!cell.isMine) {
            won = false;
          }
        }
      }
    }

    if (won) {
      this._state = BoardStateEnum.WON;
    }
  }

  /**
   * Return all coords of adjacent cells.
   * @param {Cell} cell Cell for which we want neighbours.
   * @return {Array<Coords>} The coords list.
   * @private
   */
  _getAdjacentCoords({x, y}) {
    const output = [];
    for (let xDiff = -1; xDiff <= 1; ++xDiff) {
      for (let yDiff = -1; yDiff <= 1; ++yDiff) {
        // Otherwise, we would add coords of the previous cell.
        if (xDiff !== 0 && yDiff !== 0) {
          output.push({
            x: x + xDiff,
            y: y + yDiff,
          });
        }
      }
    }

    return output;
  }
}

module.exports = Board;
