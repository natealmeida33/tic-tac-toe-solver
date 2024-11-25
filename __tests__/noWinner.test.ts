import { TicTacToe, Grid } from "../index.js";

describe("Tic-Tac-Toe - No Winner", () => {
  const grid: Grid = [
    ["x", "o", "x", "x"],
    ["o", "x", "x", "o"],
    ["x", "x", "o", "x"],
    ["o", "o", "o", "x"],
  ];
  const ticTacToe = new TicTacToe(grid);

  test("no moves left", () => {
    expect(ticTacToe.anyMovesLeft()).toBe("no");
  });

  test("game is over", () => {
    expect(ticTacToe.isGameOver()).toBeTruthy();
  });

  test("no winner", () => {
    expect(ticTacToe.checkWinner("x")).toBeFalsy();
    expect(ticTacToe.checkWinner("o")).toBeFalsy();
  });
});
