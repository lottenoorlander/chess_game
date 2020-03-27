import "./chessboard.css";

export default function chessboard(width, height) {
  const canvas = drawCanvas(width, height);
  drawBoard(canvas, width, height);
  return canvas;
}

function drawCanvas(width, height) {
  const chessboard = document.createElement("canvas");
  chessboard.classList.add("chessboard-container");
  chessboard.width = width * 100;
  chessboard.height = height * 100;
  return chessboard;
}

function drawBoard(canvas, width, height) {
  const chessboard = canvas.getContext("2d");

  for (let i = 0; i <= height; i++) {
    for (let j = 0; j <= width; j++) {
      const color = getColor(i, j);
      console.log(i, j, color);
      drawTile(chessboard, 100, color, i, j);
    }
  }
  return chessboard;
}

function getColor(x, y) {
  if (y % 2 === 0) {
    if (x % 2 === 0) {
      return "white";
    } else {
      return "black";
    }
  } else {
    if (x % 2 === 0) {
      return "black";
    } else {
      return "white";
    }
  }
}

function drawTile(board, width, color, x, y) {
  board.fillStyle = color;
  board.fillRect(y * width, x * width, width, width);
}
