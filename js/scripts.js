var draw;
var boardDimension = 600;
var thirdBoard = boardDimension / 3;

function TicTacToe() {
  this.gameState = 1000000000;
  this.playerTurn = 1;
}

TicTacToe.prototype.moveSelect = function() {
  this.gameState += this.playerturn;
  return.this.gameState;
};


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
