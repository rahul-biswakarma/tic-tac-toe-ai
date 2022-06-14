var emptyCells = [];
var loc;

const randomPicker = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") {
        loc = { i, j };
        emptyCells.push(loc);
      }
    }
  }
  if (emptyCells.length > 0) {
    let randomCell = Math.floor(Math.random() * emptyCells.length);
    board[emptyCells[randomCell].i][emptyCells[randomCell].j] = ai;
    updateBoard("c" + emptyCells[randomCell].i + emptyCells[randomCell].j, ai);
    emptyCells = [];
  }
};
