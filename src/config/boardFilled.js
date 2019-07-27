/**
 * Returns if the given board is filled.
 * @param {[]} board 
 */
export default function boardFilled(board) {
  return board.every(value => value !== null);
}
