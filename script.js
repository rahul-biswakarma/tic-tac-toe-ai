var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

var ai = "O";
var human = "X";
var currentPlayer = human;
var matchEnded = false;
var aiScore = 0;
var humanScore = 0;
var hardMode = true;

updateGameModeSetting();

$(".board-cell").html("");
document.getElementById("ai-score").innerHTML = aiScore;
document.getElementById("human-score").innerHTML = humanScore;

const boardCells = document.getElementsByClassName("board-cell");

Array.from(boardCells).forEach((element) => {
  updateGameModeSetting();
  element.addEventListener("click", () => {
    if (currentPlayer === human && !matchEnded && element.innerHTML == "") {
      element.innerHTML = human;
      let elementId = element.id;
      board[elementId[1]][elementId[2]] = human;

      currentPlayer = ai;
      if (hardMode) bestMove();
      else randomPicker();
      currentPlayer = human;

      let localWinner = checkWinner();
      if (localWinner != null) {
        matchEnded = true;
        if (localWinner == ai) {
          $("#winner-c").css("width", "100vw");
          $("#winner-name").html("AI WON");
        } else if (localWinner == human) {
          $("#winner-c").css("width", "100vw");
          $("#winner-name").html("HUMAN WON");
        } else if (localWinner == "tie") {
          $("#winner-c").css("width", "100vw");
          $("#winner-name").html("TIE!");
        }
        if (localWinner === ai) aiScore += 1;
        else if (localWinner === human) humanScore += 1;
        document.getElementById("ai-score").innerHTML = aiScore;
        document.getElementById("human-score").innerHTML = humanScore;

        document.getElementById("ai-score-sm").innerHTML = aiScore;
        document.getElementById("human-score-sm").innerHTML = humanScore;
      }
    }
  });
});
