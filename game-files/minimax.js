const bestMove = () => {
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let emptyCell = emptyCellCount();
      if (board[i][j] == "" && emptyCell > 0) {
        board[i][j] = ai;
        let score = minimax(board, 0, true);
        board[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }
  board[move.i][move.j] = ai;
  updateBoard("c" + move.i + move.j, ai);

  currentPlayer = human;
};

let scores = {
  X: 1,
  O: -1,
  tie: 0,
};

const minimax = (board, depth, isMaximizing) => {
  let result = checkWinner();
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          board[i][j] = human;
          let score = minimax(board, depth + 1, true);
          board[i][j] = "";
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          board[i][j] = ai;
          let score = minimax(board, depth + 1, false);
          board[i][j] = "";
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
};
