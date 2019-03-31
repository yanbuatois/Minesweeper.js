/**
 * Minesweeper management module.
 * @module minesweeper.js
 */

const CellStateEnum = require('./enums/CellStateEnum');
const CellFlagEnum = require('./enums/CellFlagEnum');
const BoardStateEnum = require('./enums/BoardStateEnum');
const Board = require('./class/Board');
const Cell = require('./class/Cell');
const generateMineArray = require('./utils/generateMineArray');

const output = {
  CellStateEnum,
  CellFlagEnum,
  BoardStateEnum,
  Board,
  Cell,
  generateMineArray,
};

module.exports = output;
