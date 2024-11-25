# Tic-Tac-Toe & Connect Four Solver

## HOW TO RUN:

1. Ensure you have atleast node 14.16.0 or higher installed.
   - I am using node v20.15.0.
2. Open your Terminal, run `npm i` or `npm install` at the root to install dependencies.
3. Modify the `data.json` **input** file to change the **output** of `index.ts`.
   - Examples of Tic-Tac-Toe inputs to test with can be found
     in any test file under `./__tests__/[filename].test.ts`.
4. Run `npm run start` at the root.
   - The **output** will found in the terminal:
     - anyMovesLeft() --> `true: ${count}` or `false`
     - isGameOver() --> `true` or `false`
     - checkWinner(`x`) --> `true` or `false`
     - checkWinner(`y`) --> `true` or `false`

### UNIT TESTING:

1. Open your Terminal, run `npm i` or `npm install` at the root to install dependencies.
2. Run `npm run build` at the root to transpile all TypeScript into JavaScript.
3. Run `npm run test` at the root.
   - The **output** will be found in the terminal:
     - Test Suite 1: `Tic-Tac-Toe - No Winner`:
       - test: `no moves left`
       - test: `game is over`
       - test: `no winner`
     - Test Suite 2: `Tic-Tac-Toe - Winner 'x'`:
     - Test Suite 3: `Tic-Tac-Toe - Winner 'o'`:
       - test: `vertical`
       - test: `horizontal`
       - test: `diagonal`
       - test: `all four corners`
       - test: `2x2 box`
