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

$("#close-winner").click(() => {
  $("#winner-c").css("width", "0");
});

$("#settings-icon").click(() => {
  $("#settings-c").css("width", "100vw");
});

$("#settings-close").click(() => {
  $("#settings-c").css("width", "0");
});

const updateGameModeSetting = () => {
  if (gameMode == 2) {
    $("#easy-mod").removeClass("game-mode-active");
    $("#average-mod").removeClass("game-mode-active");
    $("#hard-mod").addClass("game-mode-active");
  } else if (gameMode == 0) {
    $("#easy-mod").addClass("game-mode-active");
    $("#hard-mod").removeClass("game-mode-active");
    $("#average-mod").removeClass("game-mode-active");
  } else {
    $("#easy-mod").removeClass("game-mode-active");
    $("#hard-mod").removeClass("game-mode-active");
    $("#average-mod").addClass("game-mode-active");
  }
};

$("#hard-mod").bind("click", () => {
  gameMode = 2;
  updateGameModeSetting();
});

$("#average-mod").bind("click", () => {
  gameMode = 1;
  updateGameModeSetting();
});

$("#easy-mod").bind("click", () => {
  gameMode = 0;
  updateGameModeSetting();
});
