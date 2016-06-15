var draw;
var boardDimension = 600;
var thirdBoard = boardDimension / 3;

function TicTacToe() {
  this.gameState = 8000000000;
  this.playerTurn = 1;
}

TicTacToe.prototype.moveSelect = function(selectedSquare) {
  if (this.gameState.toString().charAt(10 - selectedSquare.toString().length) != "0") {
    alert("Square already selected.");
    return
  } else {
    this.gameState += (this.playerTurn * selectedSquare);
    this.checkForWin(this.playerTurn)
    if (this.playerTurn === 1) {
      this.playerTurn = 2;
    } else if (this.playerTurn === 2) {
      this.playerTurn = 1;
    } else {console.log("Something went wrong with player turn")}
    return this.gameState;
  };
};

TicTacToe.prototype.checkForWin = function(player) {

  var gameStateString = this.gameState.toString();
  for (var i = 1; i < gameStateString.length; i += 3) {
    if (gameStateString.charAt(i) === gameStateString.charAt(i + 1) && gameStateString.charAt(i) === gameStateString.charAt(i + 2) && gameStateString.charAt(i) === player.toString()) {
      alert("Player " + player + " wins!");
    } else {
    }
  }
  for (var i = 1; i <= 3; i ++) {
    if (gameStateString.charAt(i) === gameStateString.charAt(i + 3) && gameStateString.charAt(i) === gameStateString.charAt(i + 6) && gameStateString.charAt(i) === player.toString()) {
      alert("Player " + player + " wins!");
    }
  }

    if (gameStateString.charAt(1) === gameStateString.charAt(5) && gameStateString.charAt(1) === gameStateString.charAt(9) && gameStateString.charAt(1) === player.toString()) {
      alert("Player " + player + " wins!");
  } else if (gameStateString.charAt(3) === gameStateString.charAt(5) && gameStateString.charAt(3) === gameStateString.charAt(7) && gameStateString.charAt(3) === player.toString()) {
    alert("Player " + player + " wins!");
  }
}


var initBoard = function() {
  draw.moveTo(thirdBoard, 0);
  draw.lineTo(thirdBoard, boardDimension);
  draw.stroke();
  draw.moveTo (2 * thirdBoard, 0);
  draw.lineTo (2 * thirdBoard, boardDimension);
  draw.stroke();
  draw.moveTo (0, thirdBoard);
  draw.lineTo (boardDimension, thirdBoard);
  draw.stroke();
  draw.moveTo (0, 2 * thirdBoard);
  draw.lineTo (boardDimension, 2 * thirdBoard);
  draw.stroke();
}





$(document).ready(function() {
  var canvas = document.getElementById('canvas');
  draw = canvas.getContext("2d");
  canvas.width = boardDimension
  canvas.height = boardDimension

  initBoard();

});
