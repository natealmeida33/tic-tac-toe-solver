import { TicTacToe, Grid } from "../index.js";

describe("Tic-Tac-Toe - Winner 'o'", () => {
  test("vertical", () => {
    // grid[*][3]
    const grid: Grid = [
      ["x", "o", "x", "o"],
      ["o", "x", "o", "o"],
      ["x", "x", "x", "o"],
      ["o", "o", "x", "o"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("o")).toBeTruthy();
  });

  test("horizontal", () => {
    // grid[0][*]
    const grid: Grid = [
      ["o", "o", "o", "o"],
      ["o", "o", "x", "o"],
      ["x", "x", "o", "x"],
      ["o", "o", "o", "x"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("o")).toBeTruthy();
  });

  test("diagonal", () => {
    // grid[row][length - 1 - row]
    const grid: Grid = [
      ["x", "o", "x", "o"],
      ["o", "x", "o", "o"],
      ["x", "o", "x", "x"],
      ["o", "o", "x", "o"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("o")).toBeTruthy();
  });

  test("all four corners", () => {
    // grid[0[0], grid[0][3]
    // grid[3][0], grid[3][3]
    const grid: Grid = [
      ["o", "o", "x", "o"],
      ["o", "x", "x", "o"],
      ["x", "o", "o", "x"],
      ["o", "o", "x", "o"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("o")).toBeTruthy();
  });

  test("2x2 box", () => {
    // grid[1][0], grid[1][1]
    // grid[2][0], grid[2][1]
    const grid: Grid = [
      ["x", "o", "o", "x"],
      ["o", "o", "x", "o"],
      ["o", "o", "x", "o"],
      ["o", "x", "x", "x"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("o")).toBeTruthy();
  });
});
