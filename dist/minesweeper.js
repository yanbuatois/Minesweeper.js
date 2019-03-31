module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/minesweeper.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/class/Board.js":
/*!****************************!*\
  !*** ./src/class/Board.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @module minesweeper.js/Board
 */

/**
 * @typedef {Object} Coords Represents coords
 * @property {Number} x Coord x
 * @property {Number} y Coord y
 */
var _require = __webpack_require__(/*! ../utils/helpers */ "./src/utils/helpers.js"),
    isMineArrayValid = _require.isMineArrayValid,
    generateGridFromMineArray = _require.generateGridFromMineArray,
    getNbMines = _require.getNbMines;

var BoardStateEnum = __webpack_require__(/*! ../enums/BoardStateEnum */ "./src/enums/BoardStateEnum.js");

var CellStateEnum = __webpack_require__(/*! ../enums/CellStateEnum */ "./src/enums/CellStateEnum.js");

var CellFlagEnum = __webpack_require__(/*! ../enums/CellFlagEnum */ "./src/enums/CellFlagEnum.js");
/**
 * Class which manages the board.
 */


var Board =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {Array<Array<Number>>} mineArray Mines array.
   * @throws {Error} Throw an error if the mine array is invalid;
   * @public
   */
  function Board(mineArray) {
    _classCallCheck(this, Board);

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


  _createClass(Board, [{
    key: "cell",

    /**
     * Get a cell from its coords.
     * @param {Number} x X coordinate of the cell.
     * @param {Number} y Y coord of the cell.
     * @return {Cell} The cell.
     * @throws {Error} Will throw an error if the cell isn't on the board.
     */
    value: function cell(x, y) {
      var tx = +x;
      var ty = +y;

      if (tx < 0 || ty < 0 || ty >= this._numRows || tx >= this._numCols) {
        throw new Error("No cell is present at the coords ".concat(x, ";").concat(y, "."));
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

  }, {
    key: "cycleCellFlag",
    value: function cycleCellFlag(x, y) {
      var cell = this.cell(x, y);

      if (cell.state === CellStateEnum.OPEN) {
        throw new Error('Case already open.');
      } else if (this._state === BoardStateEnum.WON) {
        throw new Error('You have already won the game.');
      } else if (this._state === BoardStateEnum.LOST) {
        throw new Error('You have already lost the game.');
      } // We use a modulo to make a cycle.


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

  }, {
    key: "openCell",
    value: function openCell(x, y) {
      var _this = this;

      var floodFill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var cell = this.cell(x, y);

      if (cell.state = CellStateEnum.OPEN || cell.state !== CellFlagEnum.NONE) {
        return;
      }

      cell.state = CellStateEnum.OPEN;

      if (!cell.isMine) {
        var aCoords = this._getAdjacentCoords(cell);

        aCoords.forEach(function (_ref) {
          var x = _ref.x,
              y = _ref.y;

          _this.openCell(x, y, true);
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

  }, {
    key: "_updateState",
    value: function _updateState() {
      var won = true;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._grid[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var line = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = line[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var cell = _step2.value;

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
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
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

  }, {
    key: "_getAdjacentCoords",
    value: function _getAdjacentCoords(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var output = [];

      for (var xDiff = -1; xDiff <= 1; ++xDiff) {
        for (var yDiff = -1; yDiff <= 1; ++yDiff) {
          // Otherwise, we would add coords of the previous cell.
          if (xDiff !== 0 && yDiff !== 0) {
            output.push({
              x: x + xDiff,
              y: y + yDiff
            });
          }
        }
      }

      return output;
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
    /**
     * Returns the rows number
     * @type {Number}
     * @public
     */

  }, {
    key: "numRows",
    get: function get() {
      return this._grid.length;
    }
    /**
     * Get the columns count.
     * @type {Number}
     * @public
     */

  }, {
    key: "numCols",
    get: function get() {
      return this._grid[0].length;
    }
    /**
     * Get the mines count.
     * @type {Number}
     * @public
     */

  }, {
    key: "numMines",
    get: function get() {
      return getNbMines(this.grid);
    }
    /**
     * Get the grid of the game.
     * @type {Array<Array<Cell>>}
     * @public
     */

  }, {
    key: "grid",
    get: function get() {
      return this._grid;
    }
  }]);

  return Board;
}();

module.exports = Board;

/***/ }),

/***/ "./src/class/Cell.js":
/*!***************************!*\
  !*** ./src/class/Cell.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var CellFlagEnum = __webpack_require__(/*! ../enums/CellFlagEnum */ "./src/enums/CellFlagEnum.js");

var CellStateEnum = __webpack_require__(/*! ../enums/CellStateEnum */ "./src/enums/CellStateEnum.js");
/**
 * Represents a cell.
 */


var Cell =
/*#__PURE__*/
function () {
  /**
   * @private
   * @param {CellParams} param0 Settings of the cell.
   */
  function Cell(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$isMine = _ref.isMine,
        isMine = _ref$isMine === void 0 ? false : _ref$isMine,
        _ref$numAdjacentMines = _ref.numAdjacentMines,
        numAdjacentMines = _ref$numAdjacentMines === void 0 ? 0 : _ref$numAdjacentMines;

    _classCallCheck(this, Cell);

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


  _createClass(Cell, [{
    key: "x",
    get: function get() {
      return this._x;
    }
    /**
     * Get y position.
     * @type {Number}
     * @public
     */

  }, {
    key: "y",
    get: function get() {
      return this._y;
    }
    /**
     * Check if there is a mine.
     * @type {Boolean}
     * @public
     */

  }, {
    key: "isMine",
    get: function get() {
      return this._isMine;
    }
    /**
     * Number of adjacent mines.
     * @type {Number}
     * @public
     */

  }, {
    key: "numAdjacentMines",
    get: function get() {
      return this._numAdjacentMines;
    }
    /**
     * State of the cell.
     * @type {Number}
     * @public
     */

  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
    /**
     * Flag on the cell.
     * @type {Number}
     * @public
     */
    ,

    /**
     * Set the state of the case.
     * @param {Number} value New value.
     * @type {Number}
     * @private
     */
    set: function set(value) {
      this._state = value;
    }
    /**
     * Set the flag on the case.
     * @param {Number} value New value.
     * @type {Number}
     * @private
     */

  }, {
    key: "flag",
    get: function get() {
      return this._flag;
    },
    set: function set(value) {
      this._value = value;
    }
  }]);

  return Cell;
}();

module.exports = Cell;

/***/ }),

/***/ "./src/enums/BoardStateEnum.js":
/*!*************************************!*\
  !*** ./src/enums/BoardStateEnum.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @module minesweeper.js/BoardStateEnum
 */

/**
 * @readonly
 * @enum {Number} Enumeration used to know the status of the game.
 */
var BoardStateEnum = {
  /** The game isn't started */
  PRISTINE: 0,

  /** The game is in progress */
  IN_PROGRESS: 1,

  /** The game is lost. */
  LOST: 2,

  /** The game is won. */
  WON: 3
};
module.exports = BoardStateEnum;

/***/ }),

/***/ "./src/enums/CellFlagEnum.js":
/*!***********************************!*\
  !*** ./src/enums/CellFlagEnum.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @module minesweeper.js/CellFlagEnum
 */

/**
 * @readonly
 * @enum {Number} Enumeration used to know if a cell has a flag.
 */
var CellFlagEnum = {
  /** There is none flag. */
  NONE: 0,

  /** There is a flag. */
  EXCLAMATION: 1,

  /** There is a question. */
  QUESTION: 2
};
module.exports = CellFlagEnum;

/***/ }),

/***/ "./src/enums/CellStateEnum.js":
/*!************************************!*\
  !*** ./src/enums/CellStateEnum.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @module minesweeper.js/CellStateEnum
 */

/**
 * @readonly
 * @enum {Number} Enumeration about the Cell's state.
 */
var CellStateEnum = {
  /** The cell is closed.*/
  CLOSED: 0,

  /** The cell is open. */
  OPEN: 1
};
module.exports = CellStateEnum;

/***/ }),

/***/ "./src/minesweeper.js":
/*!****************************!*\
  !*** ./src/minesweeper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Minesweeper management module.
 * @module minesweeper.js
 */
var CellStateEnum = __webpack_require__(/*! ./enums/CellStateEnum */ "./src/enums/CellStateEnum.js");

var CellFlagEnum = __webpack_require__(/*! ./enums/CellFlagEnum */ "./src/enums/CellFlagEnum.js");

var BoardStateEnum = __webpack_require__(/*! ./enums/BoardStateEnum */ "./src/enums/BoardStateEnum.js");

var Board = __webpack_require__(/*! ./class/Board */ "./src/class/Board.js");

var Cell = __webpack_require__(/*! ./class/Cell */ "./src/class/Cell.js");

var generateMineArray = __webpack_require__(/*! ./utils/generateMineArray */ "./src/utils/generateMineArray.js");

var output = {
  CellStateEnum: CellStateEnum,
  CellFlagEnum: CellFlagEnum,
  BoardStateEnum: BoardStateEnum,
  Board: Board,
  Cell: Cell,
  generateMineArray: generateMineArray
};
module.exports = output;

/***/ }),

/***/ "./src/utils/generateMineArray.js":
/*!****************************************!*\
  !*** ./src/utils/generateMineArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module minesweeper.js/generateMineArray
 */
var _require = __webpack_require__(/*! ./helpers */ "./src/utils/helpers.js"),
    singleToMultidimensionalArray = _require.singleToMultidimensionalArray;
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


function generateMineArray(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 10 : _ref$rows,
      _ref$cols = _ref.cols,
      cols = _ref$cols === void 0 ? 10 : _ref$cols,
      _ref$mines = _ref.mines,
      mines = _ref$mines === void 0 ? parseInt(rows * cols * 0.15, 10) : _ref$mines;
  var length = rows * cols;
  var mineArray = [];

  for (var i = 0; i < length; ++i) {
    if (i < mines) {
      mineArray.push(1);
    } else {
      mineArray.push(0);
    }
  } // I use the sort function to sort the array randomly.


  mineArray.sort(function () {
    return 0.5 - Math.random();
  });
  return singleToMultidimensionalArray(mineArray, cols);
}

module.exports = generateMineArray;

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module minesweeper.js/isMineArrayValid
 * @private
 */
var Cell = __webpack_require__(/*! ../class/Cell */ "./src/class/Cell.js");
/**
 * Test if a mine array is valid.
 * @param {Array<Array<Number>>} mineArray Array of mines generated by the function generateMineArray.
 * @return {Boolean} True if the array is valid.
 * @private
 */


function isMineArrayValid(mineArray) {
  if (mineArray || !Array.isArray(mineArray) || !mineArray.length) {
    return false;
  }

  var cols = mineArray[0] ? mineArray[0].length : 0;

  if (cols === 0) {
    return false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mineArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var line = _step.value;

      if (!Array.isArray(line) || line.length !== cols) {
        return false;
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = line[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var cell = _step2.value;

          if (cell !== 0 && cell !== 1) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}
/**
 * Convert an array to two-dimension array.
 * @param {Array<Number>} array Number array in one dimension.
 * @param {Number} numCols Cols count
 * @private
 * @return {Array<Array<Number>>} Array in two dimensions.
 */


function singleToMultidimensionalArray(array, numCols) {
  var multi = [];

  for (var i = 0; i < array.length; i += numCols) {
    multi.push(array.slice(i, i + numCols));
  }

  return multi;
}
/**
 * Convert a mine array to a grid.
 * @param {Array<Array<Number>>} mineArray Mine array
 * @return {Array<Array<Cell>>} Array with cells.
 * @private
 */


function generateGridFromMineArray(mineArray) {
  var grid = mineArray.map(function (elt, y) {
    return elt.map(function (cell, x) {
      return new Cell({
        x: x,
        y: y,
        isMine: cell === 1,
        numAdjacentMines: (mineArray, x, y)
      });
    });
  });
  return grid;
}
/**
 * Get mines number from the grid.
 * @param {Array<Array<Cell>>} grid Game grid
 * @return {Number} Mine count.
 */


function getNbMines(grid) {
  return grid.reduce(function (previous, line) {
    return previous + line.reduce(function (previous, line) {
      return previous + line.isMine ? 1 : 0;
    }, 0);
  }, 0);
}
/**
 * Get the count of adjacent mines around the referenced case.
 * @param {Array<Array<Number>>} mineArray Mine array
 * @param {Number} x X coord of the reference.
 * @param {Number} y Y coord of the reference.
 * @return {Number} Mines number.
 */


function getNbAdjacentMines(mineArray, x, y) {
  var count = 0;
  var lines = mineArray.length;
  var cols = mineArray[0].length;

  for (var yPlus = y - 1; yPlus <= x + 1; ++yPlus) {
    for (var xPlus = x - 1; xPlus <= y + 1; ++xPlus) {
      if ((yPlus !== y || xPlus !== x) && yPlus < lines && xPlus < cols) {
        count += mineArray[y + yPlus][x + xPlus];
      }
    }
  }

  return count;
}

module.exports = {
  singleToMultidimensionalArray: singleToMultidimensionalArray,
  isMineArrayValid: isMineArrayValid,
  generateGridFromMineArray: generateGridFromMineArray,
  getNbMines: getNbMines,
  getNbAdjacentMines: getNbAdjacentMines
};

/***/ })

/******/ });
//# sourceMappingURL=minesweeper.js.map