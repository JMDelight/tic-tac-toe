var draw;
var boardDimension = 600;
var thirdBoard = boardDimension / 3;
var xClick;
var yClick;
var game;
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
  };
  console.log(this.gameState);
  return this.gameState;
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
  game = new TicTacToe();
}

var drawPiece = function(player, position) {
  var activePlayer = 'G'
  if (player === 1) {
    activePlayer = "X";
  } else if (player === 2) {
    activePlayer = "O"
  } else {
    console.log('something is wrong with our clicks.')
  }
  draw.fillText(activePlayer, )
}

var clickPlacer = function(x, y) {
  var clickValue = 0
  if (x < thirdBoard) {
    clickValue += 0;
  } else if (x < thirdBoard * 2) {
    clickValue += 1;
  } else if (x < thirdBoard * 3) {
    clickValue += 2;
  } else {
    console.log('sumthing is wrong with x position.')
  }
  if (y < thirdBoard) {
    clickValue += 0;
  } else if (y < thirdBoard * 2) {
    clickValue += 3;
  } else if (y < thirdBoard * 3) {
    clickValue += 6;
  } else {
    console.log('sumthing is wrong with y position.')
  }
  clickValue = Math.pow(10,clickValue);
  game.moveSelect(clickValue);
}

$(document).ready(function() {
  var canvas = document.getElementById('canvas');
  draw = canvas.getContext("2d");
  canvas.width = boardDimension
  canvas.height = boardDimension

  initBoard();
  canvas.addEventListener("mousedown", getPosition, false);
  function getPosition(event) {
    var x = event.x;
    var y = event.y;

    var canvas = document.getElementById("canvas");

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    xClick = x;
    yClick = y;
    clickPlacer(x, y);
    console.log("x:" + x + " y:" + y);
  }
});
