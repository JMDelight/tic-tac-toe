var draw;
var boardDimension = 600;
var thirdBoard = boardDimension / 3;
var xClick;
var yClick;
var game;
var turnCount;

function TicTacToe() {
  this.gameState = 8000000000;
  this.playerTurn = 1;
};

TicTacToe.prototype.moveSelect = function(selectedSquare) {
  turnCount ++;
  if (this.gameState.toString().charAt(10 - selectedSquare.toString().length) != "0") {
    alert("Square already selected.");
    return
  } else {
    this.gameState += (this.playerTurn * selectedSquare);
    drawGame();
    this.checkForWin(this.playerTurn);
    if (this.playerTurn === 1) {
      this.playerTurn = 2;
    } else if (this.playerTurn === 2) {
      this.playerTurn = 1;
    } else {console.log("Something went wrong with player turn")}
  };
  console.log(this.gameState);
  if (turnCount === 9) {
    alert("The game is a draw! Starting a new game.");
    initBoard();
  }
  return this.gameState;
};

TicTacToe.prototype.checkForWin = function(player) {
  var gameStateString = this.gameState.toString();
  for (var i = 1; i < gameStateString.length; i += 3) {
    if (gameStateString.charAt(i) === gameStateString.charAt(i + 1) && gameStateString.charAt(i) === gameStateString.charAt(i + 2) && gameStateString.charAt(i) === player.toString()) {
      alert("Player " + player + " wins!");
      initBoard()
    }
  };
  for (var i = 1; i <= 3; i ++) {
    if (gameStateString.charAt(i) === gameStateString.charAt(i + 3) && gameStateString.charAt(i) === gameStateString.charAt(i + 6) && gameStateString.charAt(i) === player.toString()) {
      alert("Player " + player + " wins!");
      initBoard()
    }
  };
    if (gameStateString.charAt(1) === gameStateString.charAt(5) && gameStateString.charAt(1) === gameStateString.charAt(9) && gameStateString.charAt(1) === player.toString()) {
      alert("Player " + player + " wins!");
      initBoard()
  } else if (gameStateString.charAt(3) === gameStateString.charAt(5) && gameStateString.charAt(3) === gameStateString.charAt(7) && gameStateString.charAt(3) === player.toString()) {
    alert("Player " + player + " wins!");
    initBoard()
  }
};


var initBoard = function() {
  game = new TicTacToe();
  drawGame();
  turnCount = 0
};

var drawGame = function() {
  draw.clearRect(0, 0, canvas.width, canvas.height);
  draw.rect(thirdBoard, -1, thirdBoard, boardDimension + 2)
  draw.rect(-1, thirdBoard, boardDimension + 2, thirdBoard)
  draw.stroke()

  var drawPieces = game.gameState.toString();
  for (i = drawPieces.length - 1; i > 0; i --) {
    var player = "";
    var pieceToCheck = drawPieces.charAt(i);
    if (pieceToCheck === "1") {
      player = "X";
    } else if (pieceToCheck === "2") {
      player = "O";
    } else {
      player = ""
    }
    var xPos;
    var yPos;
    if (i % 3 === 0) {
      xPos = 0;
    } else if (i % 3 === 2) {
      xPos = 1;
    } else if (i % 3 === 1) {
      xPos = 2;
    } else {
      console.log("something went wrong with drawing the pieces");
    }
    if (i >= 7) {
      yPos = 1;
    } else if (i >= 4) {
      yPos = 2;
    } else if (i >= 1) {
      yPos = 3;
    } else {
      console.log("something went wrong with drawing the pieces");
    }
    draw.fillText(player, xPos * thirdBoard + 0.04 * boardDimension, yPos * thirdBoard - 0.04 * boardDimension);
  };
};

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
  draw.font = thirdBoard + "px Arial"
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
