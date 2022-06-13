const equal3 = (a, b, c) => {
  return a == b && b == c && a != "";
};

const updateBoard = (id, player) => {
  document.getElementById(id).innerHTML = player;
};

const playerHighlighter = (playerId) => {
  document.getElementById(playerId).style.filter = "grayscale(1)";
};

$("#reset").click(() => {
  $(".board-cell").html("");
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  matchEnded = false;
});

const emptyCellCount = () => {
  let emptyCell = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") emptyCell++;
    }
  }
  return emptyCell;
};
