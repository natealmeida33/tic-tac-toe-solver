import { TicTacToe, Grid } from "../index.js";

describe("Tic-Tac-Toe - Winner 'x'", () => {
  test("vertical", () => {
    // grid[*][2]
    const grid: Grid = [
      ["x", "o", "x", "x"],
      ["o", "x", "x", "o"],
      ["x", "o", "x", "x"],
      ["o", "o", "x", "o"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("x")).toBeTruthy();
  });

  test("horizontal", () => {
    // grid[2][*]
    const grid: Grid = [
      ["x", "o", "x", "x"],
      ["o", "x", "x", "o"],
      ["x", "x", "x", "x"],
      ["o", "o", "o", "x"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("x")).toBeTruthy();
  });

  test("diagonal", () => {
    // grid[row][column]
    const grid: Grid = [
      ["x", "o", "x", "x"],
      ["o", "x", "x", "o"],
      ["x", "x", "x", "x"],
      ["o", "o", "o", "x"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("x")).toBeTruthy();
  });

  test("all four corners", () => {
    // grid[0[0], grid[0][3]
    // grid[3][0], grid[3][3]
    const grid: Grid = [
      ["x", "o", "x", "x"],
      ["o", "x", "x", "o"],
      ["x", "o", "o", "x"],
      ["x", "o", "o", "x"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("x")).toBeTruthy();
  });

  test("2x2 box", () => {
    // grid[2][1], grid[2][2]
    // grid[3][1], grid[3][2]
    const grid: Grid = [
      ["x", "o", "o", "x"],
      ["o", "o", "x", "o"],
      ["o", "x", "x", "o"],
      ["o", "x", "x", "x"],
    ];
    const ticTacToe = new TicTacToe(grid);
    expect(ticTacToe.checkWinner("x")).toBeTruthy();
  });
});
