import data from "./data.json" assert { type: "json" };

export type Mark = "x" | "o";
export type Grid = (Mark | null)[][];

export class TicTacToe {
  grid: Grid;

  /**
   * Initializes a new instance of the TicTacToe class with the provided grid.
   * @param grid A 2D array representing the current game grid.
   */
  constructor(grid: Grid) {
    this.grid = grid;
  }

  /**
   * Checks if the given mark ('x' or 'o') has won the game.
   * @param mark A string representing the player's mark to check for ('x' or 'o').
   * @returns {boolean} Returns true if the given mark has won, otherwise false.
   */
  public checkWinner(mark: Mark): boolean {
    /**
     * Helper function to check for a vertical win (4 consecutive marks in a column).
     * @returns {boolean} True if there is a vertical win for the mark, otherwise false.
     */
    const hasVertical = (): boolean => {
      const columns = new Array(this.grid.length).fill(0);

      this.grid.forEach((row) => {
        row.forEach((colValue, index) => {
          if (colValue === mark) {
            columns[index] += 1;
          }
        });
      });

      return columns.some((count) => count === 4);
    };

    /**
     * Helper function to check for a horizontal win (4 consecutive marks in a row).
     * @returns {boolean} True if there is a horizontal win for the mark, otherwise false.
     */
    const hasHorizontal = (): boolean => {
      return this.grid.some((row) => {
        row.every((column) => column === mark);
      });
    };

    /**
     * Helper function to check for a diagonal win (4 consecutive marks in a diagonal).
     * @returns {boolean} True if there is a diagonal win for the mark, otherwise false.
     */
    const hasDiagonal = (): boolean => {
      let countA = 0;
      let countB = 0;

      const length = this.grid.length;

      for (let row = 0; row < length; row++) {
        for (let column = 0; column < length; column++) {
          if (row === column) {
            if (this.grid[row][column] === mark) {
              countA++;
            }
          }

          if (column === length - 1 - row) {
            if (this.grid[row][column] === mark) {
              countB++;
            }
          }
        }
      }

      return countA === 4 || countB === 4;
    };

    /**
     * Helper function to check if the four corners are filled with the given mark.
     * @returns {boolean} True if all four corners are the given mark, otherwise false.
     */
    const hasFourCorners = (): boolean => {
      const lastIndex = this.grid.length - 1;
      const topLeft = this.grid[0][0] === mark;
      const topRight = this.grid[0][lastIndex] === mark;
      const bottomLeft = this.grid[lastIndex][0] === mark;
      const bottomRight = this.grid[lastIndex][lastIndex] === mark;

      return topLeft && topRight && bottomLeft && bottomRight;
    };

    /**
     * Helper function to check if there is a 2x2 box of the given mark in the grid.
     * A 2x2 box is formed when a mark is found in four adjacent cells in a square configuration.
     *
     * @returns {boolean} True if a 2x2 box of the given mark is found, otherwise false.
     */
    const hasTwoByTwoBox = (): boolean => {
      const length = this.grid.length;

      for (let row = 0; row < length; row++) {
        for (let column = 0; column < length; column++) {
          const rowColumn = this.grid[row]?.[column] === mark;
          const nextRowSameColumn = this.grid[row + 1]?.[column] === mark;
          const sameRowNextColumn = this.grid[row]?.[column + 1] === mark;
          const nextRowNextColumn = this.grid[row + 1]?.[column + 1] === mark;

          if (
            rowColumn &&
            nextRowSameColumn &&
            sameRowNextColumn &&
            nextRowNextColumn
          ) {
            return true;
          }
        }
      }

      return false;
    };

    return (
      hasVertical() ||
      hasHorizontal() ||
      hasDiagonal() ||
      hasFourCorners() ||
      hasTwoByTwoBox()
    );
  }

  /**
   * Checks if there are any empty spaces left on the grid.
   * @returns {string} A string indicating if there are any moves left, and how many (e.g., "yes, 3" or "no").
   */
  public anyMovesLeft(): string {
    const count = this.grid.reduce((accum, row) => {
      row.forEach((value) => {
        if (value === null) {
          accum += 1;
        }
      });
      return accum;
    }, 0);

    const movesLeft = `${count > 0 ? "yes, " : "no"}`;
    const countString = `${count > 0 ? count : ""}`;

    return `${movesLeft}${countString}`;
  }

  /**
   * Determines if the game is over by checking for a winner or a full grid.
   * @returns {boolean} True if the game is over (either there is a winner or no moves left), otherwise false.
   */
  public isGameOver(): boolean {
    const hasWinner = this.checkWinner("x") || this.checkWinner("o");

    return (
      hasWinner ||
      this.grid.every((row) => {
        return !row.includes(null);
      })
    );
  }
}

const getGrid = (): Grid => {
  const grid: Grid =
    JSON.parse(JSON.stringify(data as unknown as string)) || "[]";
  console.table(grid);
  return grid;
};

const grid = getGrid();
const ticTacToe = new TicTacToe(grid);

console.log("");
console.log("anyMovesLeft: " + ticTacToe.anyMovesLeft() + "\n");
console.log("isGameOver: " + ticTacToe.isGameOver() + "\n");
console.log("checkWinner (x): " + ticTacToe.checkWinner("x"));
console.log("checkWinner (o): " + ticTacToe.checkWinner("o") + "\n");
