/**
 * @readonly
 * @enum {Number} Enumeration used to know the status of the game.
 */
const BoardStateEnum = {
  /** The game isn't started */
  PRISTINE: 0,
  /** The game is in progress */
  IN_PROGRESS: 1,
  /** The game is lost. */
  LOST: 2,
  /** The game is won. */
  WON: 3,
};

module.exports = BoardStateEnum;
